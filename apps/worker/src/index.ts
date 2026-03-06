setInterval(() => {
  console.log(`[worker] heartbeat: ${new Date().toISOString()}`);
}, 15000);

console.log('BirthHub360 worker iniciado.');
