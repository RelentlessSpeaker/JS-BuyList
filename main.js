

$(function () {
    var $list = $(".item-list");
    var ONE_ROW_HTML = $(".item-row").html();

    var $segment = $(".stats");
    var ONE_ITEM_HTML = $(".stats-label").html();

    console.log("One row html", ONE_ITEM_HTML);

    function addItem(title) {
        var $node = $(ONE_ROW_HTML);
        var $track = $(ONE_ITEM_HTML);

        var quantity = 1;
        var $quantity_label = $node.find(".count-label");
        var $quantity_label2 = $track.find(".count-label");

        $quantity_label.text(quantity);

        $track.find("#product").text(title);
        $node.find(".not-bought").text(title);


        $node.find(".plus-button").click(function () {
            quantity += 1;
            $quantity_label.text(quantity);
            $quantity_label2.text(quantity);
        })

        $node.find(".minus-button").click(function () {
            if (quantity > 1) {
                quantity -= 1;
                $quantity_label.text(quantity);
                $quantity_label2.text(quantity);
            }
        })

        $node.find(".delete-button").click(function () {
            $node.fadeOut(250, function () {
                $node.hide();
                $track.hide();
            })
        })

        $node.find(".buy-button").click(function () {
            $node.fadeOut(250, function () {
                $node.addClass("is-bought");
                $node.fadeIn(250);
            })
        })

        $node.find(".unbuy-button").click(function () {
            $node.fadeOut(250, function () {
                $node.removeClass("is-bought");
                $node.fadeIn(250);
            })
        })


        $node.css('padding', '17px 10px');
        $node.css('border-bottom', '1px solid rgba(34,36,38,.15)');

        $list.append($node);
        $segment.append($track);
    }

    var $new_input = $(".new-item");

    $(".add").click(function () {
        var new_name = $new_input.val();

        if (new_name.trim()) {
            addItem(new_name);
            $new_input.val("");
            $new_input.focus();
        }
    })
})