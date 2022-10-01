export default function handler(req, res) {
    if (req.method == 'POST') {
        let name =req.body.name
        if (name) {
            res.status(200).json({ text: name});
        } else {
            res.status(200).json({ text: 'POST without name'});

        }

    } else {
        res.status(200).json({ text: 'Get' });

    }
  }