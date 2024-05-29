const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ error: 'Error getting connection' });
        }

        conn.query('SELECT * FROM tbl_usuarios', (err, customers) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'Error executing query' });
            }

            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;

    req.getConnection((err, conn) => {
        if (err) {
            console.error('Error getting connection:', err);
            return res.status(500).json({ error: 'Error getting connection' });
        }

        conn.query('INSERT INTO tbl_usuarios SET ?', [data], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).json({ error: 'Error executing query' });
            }

            console.log('Customer added:', result);
            res.redirect('/');  // Redirige a la lista de usuarios o a otra ruta apropiada
        });
    });
};

module.exports = controller;