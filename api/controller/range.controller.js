const Range = require('../models/mongo/user/Range.model');

exports.addRange = async (req, res) => {
    const {
        name,
        description,
        position,
        price,
    } = req.body;

    const range = await Range.findOne({ name });
    if (range) {
        return res.status(400).json({
            success: false,
            message: "El rango ya existe ¡Verificar!"
        })
    }
    const newRange = new Range({
        name,
        description,
        position,
        price,
        createdBy: req.uid
    })
    if (req.file) {
        newRange.icon = `/public/icon/${req.file.filename}`
    }
    await newRange.save((err, range) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Error al crear el rango",
                error: err
            })
        }
        if (range) {
            return res.status(201).json({
                success: true,
                message: "Rango creado correctamente",
                data: range
            })
        }
    })

}

exports.listRange = async (req, res) => {
    try {
        await Range.find({})
            .exec((err, ranges) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: "Error al listar los rangos",
                        error: err
                    })
                }
                if (ranges) {
                    return res.status(200).json({
                        success: true,
                        message: "Lista de rangos",
                        data: ranges
                    })
                }
            });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Ocurrió un error",
            error: err
        })
    }
}

exports.updateRange = async (req, res) => {
    const {
        name,
        description,
        position,
        price,
        createdBy
    } = req.body;
    const range = await Range.findOne({ name });
    if (range) {
        return res.status(400).json({
            success: false,
            message: "El rango ya existe ¡Verificar!"
        })
    }
    const newRange = new Range({
        name,
        description,
        position,
        price,
        createdBy
    })
    if (req.file) {
        newRange.icon = `/public/icon/${req.file.filename}`
    }
    await newRange.save((err, range) => {
        if (err) {

            return res.status(400).json({
                success: false,
                message: "Error al actualizar el rango",
                error: err
            })
        }
        if (range) {
            return res.status(201).json({
                success: true,
                message: "Rango actualizado correctamente",
                data: range
            })
        }
    })
}

exports.removeRange = async (req, res) => {
    const { id } = req.params;
    await Range.findByIdAndUpdate(id, { status: false }, (err, range) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Error al eliminar el rango",
                error: err
            })
        }
        if (range) {
            return res.status(201).json({
                success: true,
                message: "Rango eliminado correctamente",
                data: range
            })

        }

    })
}
