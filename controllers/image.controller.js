const imageService = require("../image.service/image.service");
const {Image} = require("../database");

module.exports = {
    getImages: async (req, res, next) => {
        try{
            const image = await imageService.getAllImages(req.query);
            res.json(image);
        }
        catch (e) {
            next(e);
        }
    },

    addImage : async (req, res, next) => {
        try{
            const image = await Image.createImage(req.body);
            res.json(image);
        }
        catch (e) {
            next(e);
        }
    }
}