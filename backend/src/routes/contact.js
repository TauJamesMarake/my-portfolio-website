const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

// POST - Save contact form submission to Supabase
router.post('/', async (req, res) => {
    const { user_name, user_email, subject, message } = req.body;

    // Validate all fields (matches your Contact.jsx form fields)
    if (!user_name || !user_email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const { data, error } = await supabase
        .from('contacts')
        .insert([{ user_name, user_email, subject, message }]);

    if (error) return res.status(500).json({ error: error.message });

    res.status(201).json({ success: true, message: 'Message saved successfully.' });
});

// GET all messages (for your own admin use later)
router.get('/', async (req, res) => {
    const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    res.json(data);
});

module.exports = router;