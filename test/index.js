var test = require('tape'),
    lib = require('..');

test('should throw for non-string', function(t){
  t.plan(1);

  t.throws(function(){
    lib({});
  }, TypeError, 'throws a TypeError');

});

test('collapses www', function(t){
  var result = lib('www.mydomain.com');
  t.equal(result, 'mydomain.com');
  t.end();
});

test('collapses www1', function(t){
  var result = lib('www1.mydomain.com');
  t.equal(result, 'mydomain.com');
  t.end();
});

test('leaves bare domain alone', function(t){
  var original = 'mydomain.com';
  var result = lib(original);
  t.equal(result, original);
  t.end();
});

test('leaves other subdomain alone', function(t){
  var result = lib('mail.mydomain.com');
  t.equal(result, 'mail.mydomain.com');
  t.end();
});

