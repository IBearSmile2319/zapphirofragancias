const Combo = require('../models/mongo/product/Combo.model');

exports.addCombo = async (req, res) => {
    const {
        name,
        description,
        position,
        price,
        products,
    } = req.body;

    const combo = await Combo.findOne({ name });
    if (combo) {
        return res.status(400).json({
            success: false,
            message: "El combo ya existe ¡Verificar!"
        })
    }
    const newCombo = new Combo({
        name,
        description,
        position,
        price,
        products,
        createdBy: req.uid
    })
    if (req.files['icon']) {
        newCombo.icon = `/public/images/${req.files['icon'][0].filename}`
    }
    if (req.files['imagen']) {
        newCombo.imagen = `/public/images/${req.files['imagen'][0].filename}`
    }

    await newCombo.save((err, combo) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Error al crear el combo",
                error: err
            })
        }
        if (combo) {
            return res.status(201).json({
                success: true,
                message: "Combo creado correctamente",
                data: combo
            })
        }
    })
}

exports.listCombo = async (req, res) => {
    try {
        await Combo.find({})
            .populate('createdBy', "username")
            .sort({ createdAt: -1 })
            .exec((err, combos) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: "Error al listar los combos",
                        error: err
                    })
                }
                if (combos) {
                    return res.status(200).json({
                        success: true,
                        message: "Lista de combos",
                        data: combos
                    })
                }
            })
    }
    catch (err) {
        return res.status(400).json({
            success: false,
            message: "Error al listar los combos",
            error: err
        })
    }
}

exports.updateCombo = async (req, res) => {
    const {
        name,
        description,
        position,
        price,
        products,
    } = req.body;

    const combo = await Combo.findOne({ name });
    if (!combo) {
        return res.status(400).json({
            success: false,
            message: "El combo no existe ¡Verificar!"
        })
    }
    const newCombo = new Combo({
        name,
        description,
        position,
        price,
        products,
        createdBy: req.uid
    })
    if (req.file) {
        newCombo.icon = `/public/icon/${req.file.filename}`
    }
    await newCombo.save((err, combo) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Error al actualizar el combo",
                error: err
            })
        }
        if (combo) {
            return res.status(201).json({
                success: true,
                message: "Combo actualizado correctamente",
                data: combo
            })
        }
    })
}

exports.deleteCombo = async (req, res) => {
    const {
        name,
    } = req.body;

    const combo = await Combo.findOne({ name });
    if (!combo) {
        return res.status(400).json({
            success: false,
            message: "El combo no existe ¡Verificar!"
        })
    }
    await Combo.deleteOne({ name })
        .exec((err, combo) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    message: "Error al eliminar el combo",
                    error: err
                })
            }
            if (combo) {
                return res.status(201).json({
                    success: true,
                    message: "Combo eliminado correctamente",
                    data: combo
                })
            }
        })
}


// User / public

exports.getCombos = async (req, res) => {
    // combo status true
    const combos = await Combo.find({ status: true });
    if (!combos) {
        return res.status(400).json({
            success: false,
            message: "El combo no existe ¡Verificar!"
        })
    }
    return res.status(200).json({
        success: true,
        message: "Lista de combos",
        data: combos
    })
}

exports.getComboById = async (req, res) => {
    const {
        id,
    } = req.body;

    const combo = await Combo.findById(id);
    if (!combo) {
        return res.status(400).json({
            success: false,
            message: "El combo no existe ¡Verificar!"
        })
    }
    return res.status(200).json({
        success: true,
        message: "Combo",
        data: combo
    })
}

