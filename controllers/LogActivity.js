import LogActivity from "../models/LogActivityModels.js";
import Users from "../models/UserModel.js";
import WorkOrders from "../models/WOModels.js";

export const LogActivityWO = async(req, res) => {
    const { id_user, id_description } = req.body;
    const user = await Users.findAll({
        where:{
            id: id_user
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const workorder = await WorkOrders.findAll({
        where:{
            id: id_description
        }
    });
    await WorkOrders.update(
        {status: 'On Progress'}, {
        where: {
            id: id_description
        }
    });
    if(!workorder[0]) return res.sendStatus(204);
    const name = user[0].name;
    const nama_client = workorder[0].nama_client;
    await Users.update(
        {status: 'Busy'}, {
        where: {
            id: id_user
        }
    });
    try {
        await LogActivity.create({
            id_user: id_user,
            name: name,
            id_description: id_description,
            description: nama_client,
            status: 'On Progress'
        });
        res.json({msg: "Log Activity Berhasil Disimpan"});
    }catch(error){
        console.log(error);
    }
}

export const LogGetTeknisiWO = async(req, res) => {
    try {
        const getteknisiwo = await LogActivity.findAll({
            where:{
                id_description: req.params.id
            },
            attributes:['id_user','name','id_description','description']
        });
        res.json(getteknisiwo);
    } catch (error) {
        console.log(error);
    }
}

export const DeleteLogTeknisi = async(req, res) => {
    const {id_description, id_user} = req.body;
    try {
        await Users.update(
            {status: 'Available'}, {
            where: {
                id: id_user
            }
        });
        await LogActivity.destroy({
            where:{
                id_user: id_user,
                id_description: id_description
            }
        });
        res.status(200).json({msg: "Status Teknisi Diperbaharui"});
    } catch (error) {
        console.log(error.message);
    }
}


export const GetLogActivity = async(req, res) => {
    try {
        const getlogactivity = await LogActivity.findAll({
            attributes:['id','id_user','name','id_description','description','status','createdAt','updatedAt'],
            order: [
                ['id', 'DESC'],
            ],
            limit: 100
        });
        res.json(getlogactivity);
    } catch (error) {
        console.log(error);
    }
}