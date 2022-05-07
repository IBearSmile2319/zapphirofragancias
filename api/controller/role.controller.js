const Role = require("../models/mongo/Admin/Role.model");

exports.roleRegister = async (req, res, next) => {
    const { name, description} = req.body;
    const role = await Role.findOne({ name });

    if (role) {
        return res.status(200).json({
            success: false,
            error: "El rol ya existe ¡Verificar!"
        })
    }
    const newRole = new Role({
        name,
        description,
    })
    if (req.file) {
        newRole.icon = `/public/icon/${req.file.filename}`
    }
    await newRole.save((err, role) => {
        if (err) {
            return res.status(400).json({
                success: false,
                message: "Error al crear el rol",
                error: err
            })
        }
        if (role) {
            return res.status(201).json({
                success: true,
                message: "Rol creado correctamente",
                data: role
            })
        }
    })
}

exports.roleList = async (req, res, next) => {
    try {
        await Role.find({})
            .exec((err, roles) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: "Error al listar los roles",
                        error: err
                    })
                }
                if (roles) {
                    return res.status(200).json({
                        success: true,
                        message: "Lista de roles",
                        data: roles
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

exports.removeRole = async (req, res, next) => {
    const { id } = req.params;
    try {
        await Role.findByIdAndDelete(id)

            .exec((err, role) => {
                if (err) {
                    return res.status(400).json({
                        success: false,
                        message: "Error al eliminar el rol",
                        error: err
                    })
                }
                if (role) {
                    return res.status(200).json({
                        success: true,
                        message: "Rol eliminado correctamente",
                        data: role
                    })
                }
            }
            )
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "Ocurrió un error",
            error: err
        })
    }
}
