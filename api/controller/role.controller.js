const Role = require("../models/mongo/Admin/Role.model");

exports.roleRegister = async (req, res, next) => {
    const { name, description, icon } = req.body;
    const role = await Role.findOne({ name });

    if (role) {
        return res.status(400).json({
            success: false,
            error: "El rol ya existe ¡Verificar!"
        })
    }
    try {
        const role = Role({
            name, description, icon
        })
        const roleStored = await role.save()
        console.log(roleStored);
        return res.status(200).json({
            ok: "200",
            body: { name, description, icon }
        })

    } catch (error) {
        console.log("Error al crear rol");
        res.status(500).json({
            bad: "500",
            menssage: error
        })
    }
}