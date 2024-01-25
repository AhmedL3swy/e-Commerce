
'use strict';


// Datatable (jquery)
$(function () {
  var dt_user_table = $('.datatables-users'),
    select2 = $('.select2'),
    userView = 'app-user-view-account.html',

    // #STATUS 
    statusObj = {
      1: { title: 'Processing', class: 'bg-label-warning' },
      2: { title: 'Shipping', class: 'bg-label-info' },
      3: { title: 'Delivered', class: 'bg-label-success' },
      4: { title: 'Canceled', class: 'bg-label-danger' },
    };
  // #SELECT2
  if (select2.length) {
    var $this = select2;
    $this.wrap('<div class="position-relative"></div>').select2({
      placeholder: 'Select Country',
      dropdownParent: $this.parent()
    });
  }
  //#DATA
  var userId="u1"
  
  var userData = Object.values(JSON.parse(localStorage.getItem('orders'))[userId]) || [];
  console.log(userData);
  if (dt_user_table.length) {
      var dt_user = dt_user_table.DataTable({
      data: userData, 
      
      columns: [
        { data: '' },
        { data:'orderID'},
        { data: 'orderName' },
        {data:'orderDate'},
        { data: 'price' },
        { data: 'status' }
      ],
      // #MAPPING 
      columnDefs: [
        {
          //#Control_mapping
          className: 'control',
          searchable: false,
          orderable: false,
          responsivePriority:1,
          targets: 0,
          render: function (data, type, full, meta) {
            return '';
          }
        },
        {
          // #OrderDate_Mapping
          targets: 3,
          render: function (data, type, full, meta) {
            return '<div class="d-flex col flex-row ">' +
              full['orderDate'] +
              '</div>';
          }
        },
        {
          // #OrderID_Mapping
          targets: 1,
          render: function (data, type, full, meta) {
            return '<div class="d-flex col-2 flex-column id">' +
              '<span class="fw-bold text-truncate">' +
              full['orderId'] +
              '</span>' +
              '</div>';
          }
        },
        
        {
          // #Name_Mapping
          targets:2,
          responsivePriority: 1,
          render: function (data, type, full, meta) {
            var $name = full['orderName'],
              $details = full['details'],
              $image = full['avatar'];
            if ($image) {
              var $output =
                '<img src="' + assetsPath + 'img/avatars/' + $image + '" alt="Avatar" class="rounded-circle">';
            } else {
              var stateNum = Math.floor(Math.random() * 6);
              var states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary'];
              var $state = states[stateNum],
                $name = full['orderName'],
                $initials = $name.match(/\b\w/g) || [];
              $initials = (($initials.shift() || '') + ($initials.pop() || '')).toUpperCase();
              $output = '<span class="avatar-initial rounded-circle bg-label-' + $state + '">' + $initials + '</span>';
            }
            // Creates full output for row
            var $row_output =
              '<div class="d-flex justify-content-start align-items-center user-name">' +
              '<div class="avatar-wrapper">' +
              '<div class="avatar avatar-sm me-3">' +
              $output +
              '</div>' +
              '</div>' +
              '<div class="d-flex flex-column">' +
              '<a href="' +
              userView +
              '" class="text-body text-truncate"><span class="fw-medium">' +
              $name +
              '</span></a>' +
              '<small class="text-muted">' +
              $details +
              '</small>' +
              '</div>' +
              '</div>';
            return $row_output;
          }
        },
        {
          // #Price_Mapping
            targets:4 ,
            render: function (data, type, full, meta) {
            var $price = full['price'];
            var boxicon= `<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 me-2"><i class='bx bx-dollar' ></i> </span>`;
            return "<span class='text-truncate d-flex align-items-center'>" +"$" + $price + '</span>';
          }
        },
        {
          // #Status_Mapping
          targets: 5,
          render: function (data, type, full, meta) {
            var $status = full['status'];

            return '<span class="badge ' + statusObj[$status].class + '">' + statusObj[$status].title + '</span>';
          }
        },
      ],
      //#Order_Default
      order: [[1, 'dec']],
      // #RESPONSIVE
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (row) {
              var data = row.data();
              return 'Details of ' + data['orderName'];
            }
          }),
          type: 'column',
          renderer: function (api, rowIdx, columns) {
            var data = $.map(columns, function (col, i) {
              return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                ? '<tr data-dt-row="' +
                    col.rowIndex +
                    '" data-dt-column="' +
                    col.columnIndex +
                    '">' +
                    '<td>' +
                    col.title +
                    ':' +
                    '</td> ' +
                    '<td>' +
                    col.data +
                    '</td>' +
                    '</tr>'
                : '';
            }).join('');

            return data ? $('<table class="table"/><tbody />').append(data) : false;
          }
        }
      },
    });
  }
});
