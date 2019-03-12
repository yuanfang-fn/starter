const proxy = {
    'GET /api/user': {id: 1, username: 'kenny', sex: 6 },
    'GET /api/user/list': [
      {id: 1, username: 'kenny', sex: 6 },
      {id: 2, username: 'kenny', sex: 6 }
    ],
    'POST /api/login/account': (req, res) => {
      setTimeout(()=>{
        const { password, username } = req.body;
        if (password === '123456') {
  
          return res.send({
            status: 'ok',
            code: 0,
            token: "sdfsdfsdfdsf",
            data: {id: 1, username: 'kenny', sex: 6 }
          });
        } else {
          return res.send({status: 'error', code: 403 });
        }
      },1000)
    },
    'DELETE /api/user/:id': (req, res) => {
      res.send({ status: 'ok', message: '删除成功！' });
    }
  }
  module.exports = proxy;