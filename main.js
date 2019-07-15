import * as posenet from '@tensorflow-models/posenet';

asyn function estimatePoseOnImage(imageElement) {
    const net = await posenet.load();

    const pose = await net.estimateSinglePose(imageElement, {
        flipHorizontal: false
    });
    return pose;
}
const imageElement = document.getElementById('cat');
const pose = estimatePoseOnImage(imageElement);

console.log(pose);