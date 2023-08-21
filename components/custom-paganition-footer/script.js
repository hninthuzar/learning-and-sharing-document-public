// dummy data
const myarr = [{ "req_no": 1, "title": "test1" },
{ "req_no": 2, "title": "test2" },
{ "req_no": 3, "title": "test3" },
{ "req_no": 4, "title": "test4" },
{ "req_no": 5, "title": "test5" },
{ "req_no": 6, "title": "test6" },
{ "req_no": 7, "title": "test7" },
{ "req_no": 8, "title": "test8" },
{ "req_no": 9, "title": "test9" },
{ "req_no": 10, "title": "test10" },
{ "req_no": 11, "title": "test11" },
{ "req_no": 12, "title": "test12" },
{ "req_no": 13, "title": "test13" },
{ "req_no": 14, "title": "test14" },
{ "req_no": 15, "title": "test15" },
{ "req_no": 16, "title": "test16" },
{ "req_no": 17, "title": "test17" },
{ "req_no": 18, "title": "test18" },
{ "req_no": 19, "title": "test19" },
{ "req_no": 20, "title": "test20" },
{ "req_no": 21, "title": "test21" },
{ "req_no": 22, "title": "test22" },
{ "req_no": 23, "title": "test23" },
{ "req_no": 24, "title": "test24" },
{ "req_no": 25, "title": "test25" },
{ "req_no": 26, "title": "test26" }];

// on page load collect data to load pagination as well as table
const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };

// At a time maximum allowed pages to be shown in pagination div
const pagination_visible_pages = 4;


// hide pages from pagination from beginning if more than pagination_visible_pages
function hide_from_beginning(element) {
    if (element.style.display === "" || element.style.display === "block") {
        element.style.display = "none";
    } else {
        hide_from_beginning(element.nextSibling);
    }
}

// hide pages from pagination ending if more than pagination_visible_pages
function hide_from_end(element) {
    if (element.style.display === "" || element.style.display === "block") {
        element.style.display = "none";
    } else {
        hide_from_beginning(element.previousSibling);
    }
}

// load data and style for active page
function active_page(element, rows, req_per_page) {
    var current_page = document.getElementsByClassName('active');
    var next_link = document.getElementById('next_link');
    var prev_link = document.getElementById('prev_link');
    var next_tab = current_page[0].nextSibling; 
    var prev_tab = current_page[0].previousSibling;
    current_page[0].className = current_page[0].className.replace("active", "");
    if (element === "next") {
        if (parseInt(next_tab.text).toString() === 'NaN') {
            next_tab.previousSibling.className += " active";
            next_tab.setAttribute("onclick", "return false");
        } else {
            next_tab.className += " active"
            render_table_rows(rows, parseInt(req_per_page), parseInt(next_tab.text));
            if (prev_link.getAttribute("onclick") === "return false") {
                prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
            }
            if (next_tab.style.display === "none") {
                next_tab.style.display = "block";
                hide_from_beginning(prev_link.nextSibling)
            }
        }
    } else if (element === "prev") {
        if (parseInt(prev_tab.text).toString() === 'NaN') {
            prev_tab.nextSibling.className += " active";
            prev_tab.setAttribute("onclick", "return false");
        } else {
            prev_tab.className += " active";
            render_table_rows(rows, parseInt(req_per_page), parseInt(prev_tab.text));
            if (next_link.getAttribute("onclick") === "return false") {
                next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
            }
            if (prev_tab.style.display === "none") {
                prev_tab.style.display = "block";
                hide_from_end(next_link.previousSibling)
            }
        }
    } else {
        element.className += "active";
        render_table_rows(rows, parseInt(req_per_page), parseInt(element.text));
        if (prev_link.getAttribute("onclick") === "return false") {
            prev_link.setAttribute("onclick", `active_page('prev',\"${rows}\",${req_per_page})`);
        }
        if (next_link.getAttribute("onclick") === "return false") {
            next_link.setAttribute("onclick", `active_page('next',\"${rows}\",${req_per_page})`);
        }
    }
}

// Render the table's row in table request-table
function render_table_rows(rows, req_per_page, page_no) {
    const response = JSON.parse(window.atob(rows));
    const resp = response.slice(req_per_page * (page_no - 1), req_per_page * page_no)
    $('#request-table').empty()
    $('#request-table').append('<tr><th>Index</th><th>Request No</th><th>Title</th></tr>');
    resp.forEach(function (element, index) {
        if (Object.keys(element).length > 0) {
            const { req_no, title } = element;
            const td = `<tr><td>${++index}</td><td>${req_no}</td><td>${title}</td></tr>`;
            $('#request-table').append(td)
        }
    });
}

// Pagination logic implementation
function pagination(data, myarr) {
    const all_data = window.btoa(JSON.stringify(myarr));
    $(".pagination").empty();
    if (data.req_per_page !== 'ALL') {
        let pager = `<a href="#" id="prev_link" onclick=active_page('prev',\"${all_data}\",${data.req_per_page})>&laquo;</a>` +
            `<a href="#" class="active" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>1</a>`;
        const total_page = Math.ceil(parseInt(myarr.length) / parseInt(data.req_per_page));
        if (total_page < pagination_visible_pages) {
            render_table_rows(all_data, data.req_per_page, data.page_no);
            for (let num = 2; num <= total_page; num++) {
                pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
        } else {
            render_table_rows(all_data, data.req_per_page, data.page_no);
            for (let num = 2; num <= pagination_visible_pages; num++) {
                pager += `<a href="#" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
            for (let num = pagination_visible_pages + 1; num <= total_page; num++) {
                pager += `<a href="#" style="display:none;" onclick=active_page(this,\"${all_data}\",${data.req_per_page})>${num}</a>`;
            }
        }
        pager += `<a href="#" id="next_link" onclick=active_page('next',\"${all_data}\",${data.req_per_page})>&raquo;</a>`;
        $(".pagination").append(pager);
    } else {
        render_table_rows(all_data, myarr.length, 1);
    }
}

//calling pagination function
pagination(data, myarr);


// trigger when requests per page dropdown changes
function filter_requests() {
    const data = { "req_per_page": document.getElementById("req_per_page").value, "page_no": 1 };
    pagination(data, myarr);
}