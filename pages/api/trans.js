import { translate } from '@vitalets/google-translate-api';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { text, language } = req.body;

        try {
            const result = await translate(text, { to: language });
            res.status(200).json({ translation: result.text });
        } catch (error) {
            res.status(500).json({ error: 'Translation failed' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
