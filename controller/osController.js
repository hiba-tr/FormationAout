const os = require ('os');
module.exports.getOsInformation = (req,res) => {
    try {
        const osInformation = {
            hostname: os.hostname(),
            type: os.type(),
            platform: os.platform(),
        }
        if(!osInformation)
        {
            throw new error("there is no OS information available");
        }


        res.status(200).json(osInformation);
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}