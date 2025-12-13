/**
 * OneTwoTrim - Trim selected layers to match the last selected layer's in/out points
 */
(function () {
    // Start undo group for atomic operation
    app.beginUndoGroup('OneTwoTrim');

    try {
        var activeComp = app.project.activeItem;

        // Validate active composition
        if (!activeComp || !(activeComp instanceof CompItem)) {
            alert('Please select a composition first.');
            return;
        }

        var selectedLayers = activeComp.selectedLayers;
        var layerCount = selectedLayers.length;

        // Validate layer selection
        if (layerCount < 2) {
            alert('Please select 2 or more layers.\nThe last selected layer will be used as the reference.');
            return;
        }

        // Get reference layer (last selected)
        var referenceLayer = selectedLayers[layerCount - 1];
        var referenceInPoint = referenceLayer.inPoint;
        var referenceOutPoint = referenceLayer.outPoint;

        // Apply trim to all other selected layers
        for (var i = 0; i < layerCount - 1; i++) {
            selectedLayers[i].inPoint = referenceInPoint;
            selectedLayers[i].outPoint = referenceOutPoint;
        }
    } catch (error) {
        alert('Error: ' + error.toString());
    } finally {
        // Always end undo group
        app.endUndoGroup();
    }
})();
