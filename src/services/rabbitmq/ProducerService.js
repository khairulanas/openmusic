const amqp = require('amqplib');

const ProducerService = {
  sendMessage: async (queue, message) => {
    // buat connection ke RabbitMQ server
    const connection = await amqp.connect(process.env.RABBITMQ_SERVER);
    // buat channel dengan menggunakan fungsi connection.createChannel
    const channel = await connection.createChannel();
    // buat queue menggunakan channel.assertQueue
    await channel.assertQueue(queue, {
      durable: true,
    });

    // kirim pesan dalam bentuk Buffer ke queue
    await channel.sendToQueue(queue, Buffer.from(message));

    // tutup koneksi setelah satu detik berlangsung dari pengiriman pesan
    setTimeout(() => {
      connection.close();
    }, 1000);
  },
};

module.exports = ProducerService;
