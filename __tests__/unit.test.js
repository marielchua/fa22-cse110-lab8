// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber tests
test('Checking if 760-422-3657 is a phone number', () => {
    expect(functions.isPhoneNumber('760-422-3657')).toBe(true);
});

test('Checking if (760)-422-3657 is a phone number', () => {
    expect(functions.isPhoneNumber('(760)-422-3657')).toBe(true);
});

test('Checking if bob is a phone number', () => {
    expect(functions.isPhoneNumber('bob')).toBe(false);
});

test('Checking if bob-760-422 is a phone number', () => {
    expect(functions.isPhoneNumber('bob-760-422')).toBe(false);
});

//isEmail tests
test('Checking if bob@gmail.com is an email', () => {
    expect(functions.isEmail('bob@gmail.com')).toBe(true);
});

test('Checking if bob@yahoo.com is an email', () => {
    expect(functions.isEmail('bob@yahoo.com')).toBe(true);
});

test('Checking if bob@gmail is an email', () => {
    expect(functions.isEmail('bob@gmail')).toBe(false);
});

test('Checking if bob@yahoo is an email', () => {
    expect(functions.isEmail('bob@yahoo')).toBe(false);
});

//isStrongPassword tests
test('Checking if 1password is a strong password', () => {
    expect(functions.isStrongPassword('1password')).toBe(false);
});

test('Checking if passworddddddddddd is a strong password', () => {
    expect(functions.isStrongPassword('passworddddddddddd')).toBe(false);
});

test('Checking if password_2 is a strong password', () => {
    expect(functions.isStrongPassword('password_2')).toBe(true);
});

test('Checking if password__ is a strong password', () => {
    expect(functions.isStrongPassword('Password__')).toBe(true);
});

//isDate tests
test('Checking if 07/15/2002 is a date', () => {
    expect(functions.isDate('07/15/2002')).toBe(true);
});

test('Checking if 7/5/2002 is a date', () => {
    expect(functions.isDate('7/5/2002')).toBe(true);
});

test('Checking if 07/15/02 is a date', () => {
    expect(functions.isDate('07/15/02')).toBe(false);
});

test('Checking if 07/15 is a date', () => {
    expect(functions.isDate('07/15')).toBe(false);
});

//isHexColor tests
test('Checking if 87ceeb is a Hex color', () => {
    expect(functions.isHexColor('87ceeb')).toBe(true);
});

test('Checking if #87ceeb is a Hex color', () => {
    expect(functions.isHexColor('#87c')).toBe(true);
});

test('Checking if #87ceebcolorrrr is a Hex color', () => {
    expect(functions.isHexColor('#87ceebcolorrr')).toBe(false);
});

test('Checking if #87 is a Hex color', () => {
    expect(functions.isHexColor('#87')).toBe(false);
});