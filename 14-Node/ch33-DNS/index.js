'use strict';

const dns = require('dns');
const { hostname } = require('os');

dns.lookup('google.com', (err, address, family) => {
  console.log(`address: ${address}, ${family}`)
  // address: 142.250.204.110, 4
});

dns.resolve4('archive.org', (err, addresses) => {
  if(err) throw err

  const res = JSON.stringify(addresses);
  console.log(`res: ${res}`);
  // res: ["207.241.224.2"]

  addresses.forEach(a => {
    dns.reverse(a, (err, hostnames) => {
      if(err) throw err
      console.log(`reverse for ${a}; ${JSON.stringify(hostnames)}`)
      // reverse for 207.241.224.2; ["www.archive.org"]
    })
  })
});