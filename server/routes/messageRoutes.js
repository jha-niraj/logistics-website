const express = require("express");
const router = express.Router();
const { sendContactFormEmail, sendRateRequestMessage } = require("../services/emailServices");
const userMiddleware = require("../middlewares/userMiddleware");

const submitContactForm = async (req, res) => {
    try {
        const { name, email, comments } = req.body;

        // Validate input
        if (!name || !email || !comments) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Send email
        await sendContactFormEmail({ name, email, comments });

        res.status(200).json({
            success: true,
            message: 'Contact form submitted successfully'
        });
    } catch (error) {
        console.error('Contact form submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to submit contact form'
        });
    }
};
const submitRateRequestForm = async (req, res) => {
    try {
        const { clientName, brandName, address, phone, email, products, productOrigin, objective, productToExport, referenceNumber } = req.body;
        console.log(
            clientName,
            brandName,
            address,
            phone,
            email,
            products,
            productOrigin,
            objective,
            productToExport,
            referenceNumber
        )

        if(!clientName || !brandName || !address || !phone || !email || products || !productOrigin || !objective || !productToExport || !referenceNumber) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        // Send Email:
        await sendRateRequestMessage(
            {
                clientName,
                brandName,
                address,
                phone,
                email,
                products,
                productOrigin,
                objective,
                productToExport,
                referenceNumber
            }
        );

        res.status(200).json({
            success: true,
            message: 'Rate Request Form submitted successfully'
        });
    } catch (err) {
        console.error('Rate Request Form submission error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to submit contact form'
        });
    }
}

router.post("/contactform", submitContactForm);
router.post("/raterequestform", userMiddleware, submitRateRequestForm);

module.exports = router;