QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing calculateSeats function with several sets of inputs', function (assert) {
  assert.equal(App.calculateSeats(2, 3), 6, 'calculate (5, 5) returns 25 - Bonus1');
  assert.equal(App.calculateSeats(500, 500), 0, 'calculate (500, 500) return 0 - Bonus2');
  assert.equal(App.calculateSeats(-5, -5), 0, 'calculate (-5, -5) return 0 - Bonus3');
  assert.equal(App.calculateSeats(3.4, 5.7), 19.38, 'calculate (3.5, 5.7) return 0 - Bonus4');
  assert.equal(App.calculateSeats('a', 'b'), 0, 'bonus5- calculate(3) return 0' );
  assert.equal(App.calculateSeats(' ',' '), 0, 'calculate (3) - Bonus6');
});
