const assert = require('chai').assert;
const Chef = require('./index');
const expect = require("chai").expect;

var cal = require('./add')

describe('Chef test',function(){
    let chef = Chef;

    it("check the dish has valid name", function(){
        assert.isString(chef.checkMenu(),'string')
    });

    it("check for a dish in menu",function(){
        let dish = chef.checkMenu()
        assert.oneOf(dish,chef.dishes)
    });

    it("check sum of two numbers are: ",function(){
        var res = cal(40,40);
        expect(res).to.equal(80);
    })

});