// "use strict";
$(function () {
  // Initialization of variables and selection of DOM elements
  var dataTable,
    datatablesUsers = $(".datatables-users"),
    select2Elements = $(".select2"),
    userViewAccountURL = "app-user-view-account.html",
    statusMap = {
      1: { title: "Pending", class: "bg-label-warning" },
      2: { title: "Active", class: "bg-label-success" },
      3: { title: "Inactive", class: "bg-label-secondary" },
    };

  // Check if there are select2 elements, and configure them if present
  if (select2Elements.length) {
    select2Elements = select2Elements
      .wrap('<div class="position-relative"></div>')
      .select2({ placeholder: "Select Country", dropdownParent: select2Elements.parent() });
  }

  // Check if there are datatables-users elements, and initialize DataTable
  if (datatablesUsers.length) {
    dataTable = datatablesUsers.DataTable({
      ajax: assetsPath + "json/user-list.json",
      columns: [
        { data: "" },
        { data: "full_name" },
        { data: "role" },
        { data: "current_plan" },
        { data: "billing" },
        { data: "status" },
        { data: "action" },
      ],
      columnDefs: [
        {
          className: "control",
          searchable: !1,
          orderable: !1,
          responsivePriority: 2,
          targets: 0,
          render: function (data, type, row, meta) {
            return "";
          },
        },
        // Custom rendering for user's full name, role, and avatar
        {
          targets: 1,
          responsivePriority: 4,
          render: function (data, type, row, meta) {
            // Extracting user details
            var fullName = row.full_name,
              email = row.email,
              avatar = row.avatar;

            return (
              '<div class="d-flex justify-content-start align-items-center"><div class="avatar-wrapper"><div class="avatar avatar-sm me-3">' +
              (avatar
                ? '<img src="' + assetsPath + "/img/avatars/" + avatar + '" alt="Avatar" class="rounded-circle">'
                : '<span class="avatar-initial rounded-circle bg-label-' +
                  [
                    "success",
                    "danger",
                    "warning",
                    "info",
                    "dark",
                    "primary",
                    "secondary",
                  ][Math.floor(6 * Math.random())] +
                  '">' +
                  (avatar = (
                    ((avatar = (fullName = row.full_name).match(/\b\w/g) || []).shift() || "") +
                    (avatar.pop() || "")
                  ).toUpperCase()) +
                  "</span>") +
              '</div></div><div class="d-flex flex-column"><a href="' +
              userViewAccountURL +
              '" class="text-body text-truncate"><span class="fw-semibold">' +
              fullName +
              '</span></a><small class="text-muted">' +
              email +
              "</small></div></div>"
            );
          },
        },
        {
          targets: 2,
          render: function (data, type, row, meta) {
            var role = row.role;
            return (
              "<span class='text-truncate d-flex align-items-center'>" +
              {
                Subscriber:
                  '<span class="badge badge-center rounded-pill bg-label-warning w-px-30 h-px-30 me-2"><i class="bx bx-user bx-xs"></i></span>',
                Author:
                  '<span class="badge badge-center rounded-pill bg-label-success w-px-30 h-px-30 me-2"><i class="bx bx-cog bx-xs"></i></span>',
                Maintainer:
                  '<span class="badge badge-center rounded-pill bg-label-primary w-px-30 h-px-30 me-2"><i class="bx bx-pie-chart-alt bx-xs"></i></span>',
                Editor:
                  '<span class="badge badge-center rounded-pill bg-label-info w-px-30 h-px-30 me-2"><i class="bx bx-edit bx-xs"></i></span>',
                Admin:
                  '<span class="badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 me-2"><i class="bx bx-mobile-alt bx-xs"></i></span>',
              }[role] +
              role +
              "</span>"
            );
          },
        },
        {
          targets: 3,
          render: function (data, type, row, meta) {
            return '<span class="fw-semibold">' + row.current_plan + "</span>";
          },
        },
        {
          targets: 5,
          render: function (data, type, row, meta) {
            var userStatus = row.status;
            return (
              '<span class="badge ' +
              statusMap[userStatus].class +
              '">' +
              statusMap[userStatus].title +
              "</span>"
            );
          },
        },
        {
          targets: -1,
          title: "Actions",
          searchable: !1,
          orderable: !1,
          render: function (data, type, row, meta) {
            return (
              '<div class="d-inline-block"><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button><div class="dropdown-menu dropdown-menu-end"><a href="' +
              userViewAccountURL +
              '" class="dropdown-item">View</a><a href="javascript:;" class="dropdown-item">Suspend</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item text-danger delete-record">Delete</a></div></div></div>'
            );
          },
        },
      ],
      order: [[1, "desc"]],
      dom: '<"row mx-2"<"col-md-2"<"me-3"l>><"col-md-10"<"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0"fB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
      language: {
        sLengthMenu: "_MENU_",
        search: "",
        searchPlaceholder: "Search..",
      },
      buttons: [
        {
          extend: "collection",
          className: "btn btn-label-secondary dropdown-toggle mx-3",
          text: '<i class="bx bx-upload me-2"></i>Export',
          buttons: [
            {
              extend: "print",
              text: '<i class="bx bx-printer me-2" ></i>Print',
              className: "dropdown-item",
              exportOptions: { columns: [2, 3, 4, 5] },
            },
            {
              extend: "csv",
              text: '<i class="bx bx-file me-2" ></i>Csv',
              className: "dropdown-item",
              exportOptions: { columns: [2, 3, 4, 5] },
            },
            {
              extend: "excel",
              text: "Excel",
              className: "dropdown-item",
              exportOptions: { columns: [2, 3, 4, 5] },
            },
            {
              extend: "pdf",
              text: '<i class="bx bxs-file-pdf me-2"></i>Pdf',
              className: "dropdown-item",
              exportOptions: { columns: [2, 3, 4, 5] },
            },
            {
              extend: "copy",
              text: '<i class="bx bx-copy me-2" ></i>Copy',
              className: "dropdown-item",
              exportOptions: { columns: [2, 3, 4, 5] },
            },
          ],
        },
        {
          text: '<i class="bx bx-plus me-0 me-sm-2"></i><span class="d-none d-lg-inline-block">Add New User</span>',
          className: "add-new btn btn-primary",
          attr: {
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#offcanvasAddUser",
          },
        },
      ],
      responsive: {
        details: {
          display: $.fn.dataTable.Responsive.display.modal({
            header: function (column) {
              return "Details of " + column.data().full_name;
            },
          }),
          type: "column",
          renderer: function (api, rowIdx, columns) {
            var rowData = $.map(columns, function (column, colIdx) {
              return column.title !== "" ?
                '<tr data-dt-row="' + column.rowIndex + '" data-dt-column="' + column.columnIndex + '"><td>' + column.title + ":</td> <td>" + column.data + "</td></tr>" :
                "";
            }).join("");

            return !!rowData && $('<table class="table"/><tbody />').append(rowData);
          },
        },
      },
      initComplete: function () {
        this.api()
          .columns(2)
          .every(function () {
            var column = this,
              select = $(
                '<select id="UserRole" class="form-select text-capitalize"><option value=""> Select Role </option></select>'
              )
                .appendTo(".user_role")
                .on("change", function () {
                  var value = $.fn.dataTable.util.escapeRegex($(this).val());
                  column.search(value ? "^" + value + "$" : "", !0, !1).draw();
                });

            column.data()
              .unique()
              .sort()
              .each(function (value, index) {
                select.append('<option value="' + value + '">' + value + "</option>");
              });
          });

        this.api()
          .columns(3)
          .every(function () {
            var column = this,
              select = $(
                '<select id="UserPlan" class="form-select text-capitalize"><option value=""> Select Plan </option></select>'
              )
                .appendTo(".user_plan")
                .on("change", function () {
                  var value = $.fn.dataTable.util.escapeRegex($(this).val());
                  column.search(value ? "^" + value + "$" : "", !0, !1).draw();
                });

            column.data()
              .unique()
              .sort()
              .each(function (value, index) {
                select.append('<option value="' + value + '">' + value + "</option>");
              });
          });

        this.api()
          .columns(5)
          .every(function () {
            var column = this,
              select = $(
                '<select id="FilterTransaction" class="form-select text-capitalize"><option value=""> Select Status </option></select>'
              )
                .appendTo(".user_status")
                .on("change", function () {
                  var value = $.fn.dataTable.util.escapeRegex($(this).val());
                  column.search(value ? "^" + value + "$" : "", !0, !1).draw();
                });

            column.data()
              .unique()
              .sort()
              .each(function (value, index) {
                select.append(
                  '<option value="' +
                    statusMap[value].title +
                    '" class="text-capitalize">' +
                    statusMap[value].title +
                    "</option>"
                );
              });
          });
      },
    });
    
    $(".datatables-users tbody").on("click", ".delete-record", function () {
      dataTable.row($(this).parents("tr")).remove().draw();
      
    });
    $(".datatables-users tbody").on("click", function () {
        // Sample data for the new row
var newData = {
  full_name: "John Doe",
  role: "Subscriber",
  current_plan: "Basic Plan",
  billing: "$19.99",
  status: 1, // Assuming 1 represents the 'Pending' status
  action: "", // You can add action data if needed
};

// Add the new row to the DataTable
dataTable.row.add(newData).draw();

      // dataTable.row($(this).parents("tr")).remove().draw();
      
    });

    setTimeout(() => {
      $(".dataTables_filter .form-control").removeClass("form-control-sm"),
        $(".dataTables_length .form-select").removeClass("form-select-sm");
    }, 300);
  }
});

(function () {
  const phoneMaskElements = document.querySelectorAll(".phone-mask"),
    addNewUserForm = document.getElementById("addNewUserForm");

  if (phoneMaskElements) {
    phoneMaskElements.forEach(function (element) {
      new Cleave(element, { phone: !0, phoneRegionCode: "US" });
    });
  }

  FormValidation.formValidation(addNewUserForm, {
    fields: {
      userFullname: {
        validators: { notEmpty: { message: "Please enter fullname " } },
      },
      userEmail: {
        validators: {
          notEmpty: { message: "Please enter your email" },
          emailAddress: { message: "The value is not a valid email address" },
        },
      },
    },
    plugins: {
      trigger: new FormValidation.plugins.Trigger(),
      bootstrap5: new FormValidation.plugins.Bootstrap5({
        eleValidClass: "",
        rowSelector: function (element, form) {
          return ".mb-3";
        },
      }),
      submitButton: new FormValidation.plugins.SubmitButton(),
      autoFocus: new FormValidation.plugins.AutoFocus(),
    },
  });

})();
// Assume the variable 'dataTable' is the reference to your DataTable instance

