import WorkOrders from "../models/WOModels.js";

export const getWorkOrders = async(req, res) => {
    try {
        const workorders = await WorkOrders.findAll({
            attributes:['id','no_wo','nama_client','id_pelanggan','alamat','contact_person','email','tikor','link_tikor','paket_berlangganan','note','label_fat','status','createdAt','updatedAt'],
            order: [
                ['id', 'DESC'],
            ]
        });
        res.json(workorders);
    } catch (error) {
        console.log(error);
    }
}

export const getWorkOrdersById = async(req, res) => {
    try {
        const workorders = await WorkOrders.findAll({
            where:{
                id: req.params.id
            },
            attributes:['id','no_wo','nama_client','id_pelanggan','alamat','contact_person','email','tikor','link_tikor','paket_berlangganan','note','label_fat','status','createdAt','updatedAt']
        });
        res.json(workorders);
    } catch (error) {
        console.log(error);
    }
}

export const addWorkOrder = async(req, res) => {
    const { no_wo, nama_client, id_pelanggan, alamat, contact_person, email, tikor, link_tikor, paket_berlangganan, note, label_fat } = req.body;
    try {
        await WorkOrders.create({
            no_wo: no_wo,
            nama_client: nama_client, 
            id_pelanggan: id_pelanggan, 
            alamat: alamat, 
            contact_person: contact_person, 
            email: email, 
            tikor: tikor, 
            link_tikor: link_tikor, 
            paket_berlangganan: paket_berlangganan, 
            note: note, 
            label_fat: label_fat, 
            status: 'Menunggu diterbitkan'
        });
        res.json({msg: "Work Order berhasil tersimpan"});
    }catch(error){
        console.log(error);
    }
}

export const updateWorkOrder = async(req, res) => {
    const { id, nama_client, id_pelanggan, alamat, contact_person, email, tikor, link_tikor, paket_berlangganan, note, label_fat } = req.body;
    if(!id) return res.sendStatus(204);
    const workorder = await WorkOrders.findAll({
        where:{
            id: id
        }
    });
    if(!workorder[0]) return res.sendStatus(204);
    try {
        await WorkOrders.update(
            {
                nama_client: nama_client, 
                id_pelanggan: id_pelanggan, 
                alamat: alamat,
                contact_person: contact_person, 
                email: email,
                tikor: tikor,
                link_tikor: link_tikor,
                paket_berlangganan: paket_berlangganan,
                note: note,
                label_fat: label_fat
            }, {
            where: {
                id: req.body.id
            }
        });
        res.json({msg: "Data berhasil di update"});
    } catch (error) {
        console.log(error);
    }
}

export const deleteWorkOrderById = async(req, res) => {
    try {
        await WorkOrders.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Work Order Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

