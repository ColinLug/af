let j = Math.round(Math.random()*10);
let scene = new THREE.Scene();
for(let i=0; i<j; i++){
    let x = Math.random()*20;
    let z = Math.random()*20;
    let scale = 1 + 0.2*Math.round(Math.random()*-1);
     
    let mtlLoader = new MTLLoader();
    mtlLoader.load("Tree 02/Tree.mtl", function(materials){
        materials.preload();
        let model3d = new OBJLoader();
        model3d.setPath('Tree 02/');
        model3d.setMaterials(materials)
        model3d.load('Tree.obj', function(object){
            object.scale = (scale, scale, scale);
            object.position = (x, 0, z);
            scene.add(object);
        })
    })
}