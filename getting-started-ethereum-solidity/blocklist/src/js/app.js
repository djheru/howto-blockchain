App = {
    web3Provider: null,
    contracts: {},

    init: function () {
        // load items
        const itemsRow = $('#itemsRow');
        const itemTemplate = $('#itemTemplate');

        itemTemplate.find('.panel-title').text('Item 1');
        itemTemplate.find('.item-description').text('Item 1 description, and such as');
        itemTemplate.find('.item-price').text('10.11');
        itemTemplate.find('.item-seller').text('0xd66f031ed4be78009ff5e6b63148249b797cec66');

        itemsRow.append(itemTemplate.html());

        return App.initWeb3();
    },

    initWeb3: function () {
        /*
         * Replace me...
         */

        return App.initContract();
    },

    initContract: function () {
        /*
         * Replace me...
         */

        return App.bindEvents();
    },

    bindEvents: function () {
        $(document).on('click', '.btn-adopt', App.handleAdopt);
    },

    markAdopted: function (adopters, account) {
        /*
         * Replace me...
         */
    },

    handleAdopt: function (event) {
        event.preventDefault();

        var petId = parseInt($(event.target).data('id'));

        /*
         * Replace me...
         */
    }

};

$(function () {
    $(window).load(function () {
        App.init();
    });
});
