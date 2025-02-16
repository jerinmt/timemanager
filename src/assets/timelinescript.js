google.load("visualization", "1");

        // Set callback to run when API is loaded
        google.setOnLoadCallback(drawVisualization);

        var timeline;
        var data;

        function getSelectedRow() {
            var row = undefined;
            var sel = timeline.getSelection();
            if (sel.length) {
                if (sel[0].row != undefined) {
                    row = sel[0].row;
                }
            }
            return row;
        }

        // Called when the Visualization API is loaded.
        function drawVisualization() {
            // Create and populate a data table.
            data = new google.visualization.DataTable();
            data.addColumn('datetime', 'start');
            data.addColumn('datetime', 'end');
            data.addColumn('string', 'content');

            // specify options
            var options = {
                width:  "100%",
                height: "300px",
                //height: "auto",
                editable: true,   // enable dragging and editing items
                //axisOnTop: true,
                style: "box"
            };

            // Instantiate our timeline object.
            timeline = new links.Timeline(document.getElementById('mytimeline'), options);

            // Add event listeners
            google.visualization.events.addListener(timeline, 'select', onselect);
            google.visualization.events.addListener(timeline, 'change', onchange);
            google.visualization.events.addListener(timeline, 'add', onadd);
            google.visualization.events.addListener(timeline, 'edit', onedit);
            google.visualization.events.addListener(timeline, 'delete', ondelete);
            google.visualization.events.addListener(timeline, 'rangechange', onrangechange);
 

            // Draw our timeline with the created data and options
            timeline.draw(data);
            onrangechange();
        }

        // Make a callback function for the select item
        var onselect = function (event) {
            var row = getSelectedRow();

            if (row != undefined) {
                document.getElementById("info").innerHTML += "item " + row + " selected<br>";
                // Note: you can retrieve the contents of the selected row with
                //       data.getValue(row, 2);
            }
            else {
                document.getElementById("info").innerHTML += "no item selected<br>";
            }
        };

        // callback function for the change item
        var onchange = function () {
            var row = getSelectedRow();
            document.getElementById("info").innerHTML += "item " + row + " changed<br>";
        };

        // callback function for the delete item
        var ondelete = function () {
            var row = getSelectedRow();
            document.getElementById("info").innerHTML += "item " + row + " deleted<br>";
        };

        // callback function for the edit item
        var onedit = function () {
            var row = getSelectedRow();
            document.getElementById("info").innerHTML += "item " + row + " edit<br>";
            var content = data.getValue(row, 2);
            var newContent = prompt("Enter content", content);
            if (newContent != undefined) {
                data.setValue(row, 2, newContent);
            }
            timeline.redraw();
        };

        // callback function for the add item
        var onadd = function () {
            var row = getSelectedRow();
            document.getElementById("info").innerHTML += "item " + row + " created<br>";
            var content = data.getValue(row, 2);
            var newContent = prompt("Enter content", content);
            if (newContent != undefined) {
                data.setValue(row, 2, newContent);
                timeline.redraw();
            }
            else {
                // cancel adding the item
                timeline.cancelAdd();
            }
        };

        function onrangechange() {
            // adjust the values of startDate and endDate
            var range = timeline.getVisibleChartRange();
            document.getElementById('startDate').value = dateFormat(range.start);
            document.getElementById('endDate').value   = dateFormat(range.end);
        }

        

        // adjust start and end time.
        function setTime() {
            if (!timeline) return;

            var newStartDate = new Date(document.getElementById('startDate').value);
            var newEndDate   = new Date(document.getElementById('endDate').value);
            timeline.setVisibleChartRange(newStartDate, newEndDate);
        }

        // set the visible range to the current time
        function setCurrentTime() {
            if (!timeline) return;

            timeline.setVisibleChartRangeNow();
            onrangechange();
        }

        // Format given date as "yyyy-mm-dd hh:ii:ss"
        // @param datetime   A Date object.
        function dateFormat(date) {
            var datetime =   date.getFullYear() + "-" +
                    ((date.getMonth()   <  9) ? "0" : "") + (date.getMonth() + 1) + "-" +
                    ((date.getDate()    < 10) ? "0" : "") +  date.getDate() + " " +
                    ((date.getHours()   < 10) ? "0" : "") +  date.getHours() + ":" +
                    ((date.getMinutes() < 10) ? "0" : "") +  date.getMinutes() + ":" +
                    ((date.getSeconds() < 10) ? "0" : "") +  date.getSeconds();
            return datetime;
        }
        

