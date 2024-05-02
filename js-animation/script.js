document.addEventListener('DOMContentLoaded', () => {
    const movableBlock = document.getElementById('movable-block');
    const controlButton = document.getElementById('control-button');
    let isMoving = false;

    const calculatePositions = () => {
        const startLeftPosition = 20;
        const endLeftPosition = window.innerWidth - movableBlock.clientWidth - 20;
        return { startLeftPosition, endLeftPosition };
    };

    let { startLeftPosition, endLeftPosition } = calculatePositions();

    window.addEventListener('resize', () => {
        let positions = calculatePositions();
        startLeftPosition = positions.startLeftPosition;
        endLeftPosition = positions.endLeftPosition;
        movableBlock.style.left = isMoving ? `${endLeftPosition}px` : `${startLeftPosition}px`;
    });

    controlButton.addEventListener('click', () => {
        isMoving = !isMoving;
        movableBlock.style.left = isMoving ? `${endLeftPosition}px` : `${startLeftPosition}px`;
    });
});
