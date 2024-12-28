const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const body = JSON.parse(req.body);

    const message = `
      Name: ${body.name}\r\n
      Email: ${body.email}\r\n
      Message: ${body.message}
    `;

    console.log('Preparing to send email with the following details:');
    console.log(`To: ogbunuzorchristopher@yahoo.com`);
    console.log(`From: ogbunuzorchristopher@gmail.com`);
    console.log(`Subject: New Message!`);
    console.log(`Message: ${message}`);

    await mail.send({
      to: 'ogbunuzorchristopher@yahoo.com',
      from: 'ogbunuzorchristopher@gmail.com',
      subject: 'New Message!',
      text: message,
      html: message.replace(/\r\n/g, '<br>'),
    });

    console.log('Email sent successfully.');
    res.status(200).json({ status: 'Ok' });
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    console.error('Error response body:', error.response?.body?.errors || 'No details available');
    res.status(500).json({
      error: 'Failed to send email. Please check the server logs for more details.',
    });
  }
};



// const mail = require('@sendgrid/mail');

// // Set SendGrid API key
// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async (req, res) => {
//   try {
//     // Parse the request body
//     const body = JSON.parse(req.body);

//     // Create the email message
//     const message = `
//       Name: ${body.name}\r\n
//       Email: ${body.email}\r\n
//       Message: ${body.message}
//     `;

//     console.log('Preparing to send email with the following details:');
//     console.log(`To: ogbunuzorchristopher@yahoo.com`);
//     console.log(`From: ogbunuzorchristopher@gmail.com`);
//     console.log(`Subject: New Message!`);
//     console.log(`Message: ${message}`);

//     // Send the email
//     await mail.send({
//       to: 'kris_receive@yahoo.com',
//       from: 'kris_send@gmail.com',
//       subject: 'New Message!',
//       text: message,
//       html: message.replace(/\r\n/g, '<br>'),
//     });

//     console.log('Email sent successfully.');
//     // Respond with success status
//     res.status(200).json({ status: 'Ok' });
//   } catch (error) {
//     console.error('Error occurred while sending email:', error);

//     // Send error response to the client
//     res.status(500).json({
//       error: 'Failed to send email. Please check the server logs for more details.',
//     });
//   }
// };




// const mail = require('@sendgrid/mail');

// mail.setApiKey(process.env.SENDGRID_API_KEY);

// export default async (req, res) => {
//   const body = JSON.parse(req.body);

//   const message = `
//     Name: ${body.name}\r\n
//     Email: ${body.email}\r\n
//     Message: ${body.message}
//   `;

//   await mail.send({
//     to: 'ogbunuzorchristopher@yahoo.com',
//     from: 'ogbunuzorchristopher@gmail.com',
//     subject: 'New Message!',
//     text: message,
//     html: message.replace(/\r\n/g, '<br>'),
//   });

//   res.status(200).json({ status: 'Ok' });
// }
