addSubDomain({
  description: 'Mailserver test',
  domain: '1bt.uk', 
  subdomain: 'mailsvr',
  owner: {
    repo: 'https://github.com/mikespdb/free-domains',
    email: 'mike_spdb@yahoo.com',
  },
  record: {
    CNAME: 'mikespdb.github.io',
  },
});
