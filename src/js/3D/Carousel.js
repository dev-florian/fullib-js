import Utils from "./../Utils/Utils";
import * as THREE from 'three';
import "./../../css/carousel3D/carousel3D.css";
import fragment01 from './Shaders/01/fragment.glsl'
import fragment02 from './Shaders/02/fragment.glsl'
import fragment03 from './Shaders/03/fragment.glsl'
import fragment04 from './Shaders/04/fragment.glsl'
import fragment05 from './Shaders/05/fragment.glsl'
import fragment06 from './Shaders/06/fragment.glsl'
import fragment07 from './Shaders/07/fragment.glsl'
import vertex from './Shaders/vertex.glsl'
import displacementImg from './Displacement/disp1.jpg'

export default class Carousel extends Utils {
    constructor(options = {}) {
        super();

        //BASIC
        this.elem = options.elem ? (options.elem instanceof Element ? options.elem : document.querySelector(options.elem)) : document.querySelector('.carousel-3d');

        if (this.elem) {
            this.currentIndex = 0
            this.preset = options.preset ? options.preset : false;
            this.beforeTransition = options.beforeTransition !== false;
            this.dots = options.dots !== false;
            this.dotElements = [];
            this.autoplay = options.autoplay !== false;
            this.intervalId = null;
            this.status = {pause: false};
            this.speed = options.speed ? options.speed : 750;
            this.pause = options.pause ? options.pause : 3000;
            this.vertex = options.vertex ? options.vertex : vertex;
            this.fragment = options.fragment ? options.fragment : false;
            this.uniforms = options.uniforms ? options.uniforms : {
                intensity: {value: .5, type: 'f', min: 0, max: 2},
                width: {value: 0.5, type: 'f', min: 0, max: 10},
                scaleX: {value: 40, type: 'f', min: 0.1, max: 60},
                scaleY: {value: 40, type: 'f', min: 0.1, max: 60},
                radius: {value: 0.2, type: 'f', min: 0.1, max: 2},
            };

            this.breakPointTablet = options.breakPoint && options.breakPoint.tablet ? options.breakPoint.tablet : 991;
            this.breakPointMobile = options.breakPoint && options.breakPoint.mobile ? options.breakPoint.mobile : 991;

            if (!this.fragment) {
                this.preset = this.preset ? this.preset : '04';
            }

            if (this.preset) {
                if (this.preset === '01') this.fragment = fragment01;
                if (this.preset === '02') this.fragment = fragment02;
                if (this.preset === '03') this.fragment = fragment03;
                if (this.preset === '04') this.fragment = fragment04;
                if (this.preset === '05') this.fragment = fragment05;
                if (this.preset === '06') this.fragment = fragment06;
                if (this.preset === '07') this.fragment = fragment07;
            }


            this.time = 0;
            this.textures = [];
            this.nextDiv = this.elem.querySelector('.next');
            this.prevDiv = this.elem.querySelector('.prev');
            this.images = this.elem.querySelectorAll('.slide');
            this.elem.classList.add('fullib-carousel-3d');
            this.elem.classList.add('init-progress');

            this.initSlides();
        }
    }

    initSlides() {
        this.createScene();
        this.elem.classList.remove('init-progress');
        this.elem.classList.add('init-success');

        if (this.autoplay) {
            this.resetLoop();
        }

        if (this.dots) {
            this.generateDots();
        }
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();

        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer();
        // this.width = window.innerWidth;
        // this.height = window.innerHeight;
         this.width = this.elem.innerWidth;
         this.height = this.elem.innerHeight;
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xeeeeee, 1);

        this.elem.appendChild(this.renderer.domElement);

        this.camera = new THREE.PerspectiveCamera(
            70,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );

        this.camera.position.set(0, 0, 2);

        this.paused = false;

        this.initiate(()=>{

            this.setupResize();
            this.settings();
            this.addObjects();
            this.resize();
            this.render();
        })

        if (this.nextDiv) {
            this.nextDiv.addEventListener('click', () => {
                this.nextSlide();
            })
        }

        if (this.prevDiv) {
            this.prevDiv.addEventListener('click', () => {
                this.prevSlide();
            })
        }
    }

    settings() {
        this.settings = {progress:0};

        Object.keys(this.uniforms).forEach((item)=> {
            this.settings[item] = this.uniforms[item].value;
        })
    }

    setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
    }

    initiate(cb){
        this.images[0].classList.add('is-visible');
        const promises = [];
        let that = this;
        this.images.forEach((div,i)=>{
            let url = div.getAttribute('data-media');
            if(window.innerWidth < that.breakPointTablet && div.getAttribute('data-media-tablet')){
                url = div.getAttribute('data-media-tablet');
            }
            if(window.innerWidth < that.breakPointMobile && div.getAttribute('data-media-mobile')){
                url = div.getAttribute('data-media-mobile');
            }

            let promise = new Promise(resolve => {
                that.textures[i] = new THREE.TextureLoader().load( url, resolve );
            });
            promises.push(promise);
        })

        Promise.all(promises).then(() => {
            cb();
        });
    }

    addObjects() {
        this.material = new THREE.ShaderMaterial({
            side: THREE.DoubleSide,
            uniforms: {
                time: {type: "f", value: 0},
                progress: {type: "f", value: 0},
                border: {type: "f", value: 0},
                intensity: {type: "f", value: 0},
                scaleX: {type: "f", value: 40},
                scaleY: {type: "f", value: 40},
                transition: {type: "f", value: 40},
                swipe: {type: "f", value: 0},
                width: {type: "f", value: 0},
                radius: {type: "f", value: 0},
                texture1: {type: "f", value: this.textures[0]},
                texture2: {type: "f", value: this.textures[1]},
                displacement: {type: "f", value: new THREE.TextureLoader().load(displacementImg)},
                resolution: {type: "v4", value: new THREE.Vector4()},
            },
            transparent: true,
            vertexShader: this.vertex,
            fragmentShader: this.fragment,
            depthTest: false,
            depthWrite: false
        });

        this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);

        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
    }

    render() {
        this.time += 0.05;
        this.material.uniforms.time.value = this.time;
        this.material.uniforms.progress.value = this.settings.progress;

        Object.keys(this.uniforms).forEach((item) => {
            this.material.uniforms[item].value = this.settings[item];
        });

        // this.camera.position.z = 3;
        // this.plane.rotation.y = 0.4*Math.sin(this.time)
        // this.plane.rotation.x = 0.5*Math.sin(0.4*this.time)

        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }


    resize() {
        this.width = this.elem.offsetWidth;
        this.height = this.elem.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;


        // image cover
        this.imageAspect = this.textures[0].image.height/this.textures[0].image.width;

        let a1; let a2;
        if(this.height/this.width>this.imageAspect) {
            a1 = (this.width/this.height) * this.imageAspect ;
            a2 = 1;
        } else{
            a1 = 1;
            a2 = (this.height/this.width) / this.imageAspect;
        }

        this.material.uniforms.resolution.value.x = this.width;
        this.material.uniforms.resolution.value.y = this.height;
        this.material.uniforms.resolution.value.z = a1;
        this.material.uniforms.resolution.value.w = a2;

        const dist  = this.camera.position.z;
        const height = 1;
        this.camera.fov = 2*(180/Math.PI)*Math.atan(height/(2*dist));

        this.plane.scale.x = this.camera.aspect;
        this.plane.scale.y = 1;

        this.camera.updateProjectionMatrix();
    }

    startCarousel() {
        this.resetLoop();

        // Ajouter des écouteurs d'événements pour les actions utilisateur
        document.addEventListener('click', this.resetLoop.bind(this));
    }

    resetLoop() {
        if (this.intervalId) {
            clearTimeout(this.intervalId);
        }
        this.loop();
    }

    loop = () => {
        if(!this.isRunning){
            this.intervalId = setTimeout(() => {
                this.nextSlide();
            }, this.pause);
        }
    };

    nextSlide() {
        this.goToIndex(this.currentIndex + 1)
    }

    prevSlide() {
        this.goToIndex(this.currentIndex - 1)
    }

    goToIndex(index) {
        if (!this.isRunning) {
            this.isRunning = true;

            const indexBeforeChange = this.currentIndex;

            this.currentIndex = index;
            if (this.currentIndex < 0) {
                this.currentIndex = this.textures.length - 1;
            }
            if (this.currentIndex >= this.textures.length) {
                this.currentIndex = 0;
            }

            this.prevTexture = this.textures[this.currentIndex];

            this.material.uniforms.texture2.value = this.prevTexture;

            this.elem.classList.add('transition-progress');

            if (this.beforeTransition) {
                this.images[indexBeforeChange].classList.remove('is-visible');
                this.images[this.currentIndex].classList.add('is-visible');

                if(this.dots){
                    this.dotElements.forEach(dot => {
                        dot.classList.remove('active');
                    })
                    this.dotElements[this.currentIndex].classList.add('active');
                }
            }

            this.animateValue({
                duration: this.speed,
                startValue: 0,
                endValue: 1,
                updateFunction: (value) => {
                    this.settings.progress = value;
                },
                onComplete: () => {
                    this.elem.classList.remove('transition-progress');
                    this.isRunning = false;
                    this.settings.progress = 0;
                    this.material.uniforms.texture1.value = this.prevTexture;

                    if (!this.beforeTransition) {
                        this.images[indexBeforeChange].classList.remove('is-visible');
                        this.images[this.currentIndex].classList.add('is-visible');

                        if(this.dots){
                            this.dotElements.forEach(dot => {
                                dot.classList.remove('active');
                            })
                            this.dotElements[this.currentIndex].classList.add('active');
                        }
                    }


                    if(this.autoplay){
                        this.resetLoop();
                    }
                }
            });
        }
    }

    generateDots(){
        let dotsContainer = this.addElement('div', 'dots',
            {
                addTo: this.elem
            })

        this.images.forEach((image, index) => {
            let isActive = index === this.currentIndex ? ' active' : '';
            let className = 'dot';
            let dot = this.addElement('div', className,
                {
                    addTo: dotsContainer
                })

            if(isActive){
                dot.classList.add('active');
            }

            if(image.getAttribute('data-dot-text')){
                dot.classList.add('with-text');
                dot.innerHTML = image.getAttribute('data-dot-text');
            }else{
                dot.classList.add('with-bulb');
            }

            dot.setAttribute('data-index', index);

            this.dotElements[index] = dot;

            dot.addEventListener('click', e => {
                this.goToIndex(index)
            })
        })
    }

    animateValue({duration, startValue, endValue, updateFunction, onComplete}) {
        const startTime = performance.now();

        function update() {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = startValue + (endValue - startValue) * progress;

            // Call the updateFunction with the current value
            updateFunction(currentValue);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                onComplete();
            }
        }

        requestAnimationFrame(update);
    }

    setPause(){
        this.status.pause = true;
    }
    setRun(){
        this.status.pause = false;
    }
}
