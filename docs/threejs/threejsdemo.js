
export function cube() {
    import('./cube').then(({default: cube}) => {
    }).catch(error => 'An error occurred while loading webgl');
}