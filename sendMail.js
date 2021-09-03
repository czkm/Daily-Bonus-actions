/*
 * @Description:邮件发送
 * @Author: zk-chen
 * @Date: 2021-09-03 10:52:54
 * @LastEditTime: 2021-09-03 10:59:05
 * @LastEditors: zk-chen
 * @FilePath: /Daily-Bonus-actions/sendMail.js
 */
const nodemailer = require('nodemailer');

const sendMail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    port: '465',
    secureConnection: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }
  });

  data.from = `"${data.from}" ${process.env.user}`;

  await transporter.sendMail(data);
};

module.exports = sendMail;
