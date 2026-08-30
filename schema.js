const joi = require('joi')

module.exports.ListingSchema = joi.object({
    listing: joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        location: joi.string().required(),
        country: joi.string().required(),
        price: joi.number().required().min(0),
        rating: joi.number().required().min(0),
        image: {
            url: joi.string().allow("", null),
            filename: joi.string().allow("", null)
        },
    }).required(),
})