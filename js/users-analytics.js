function getUsersData() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

function createAnalyticsComponent(usersData, totalUsers, totalSellers, activeUsers, pendingSellers) {
  analyticComponent=`
  <div class="col-sm-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
          <div class="content-left">
            <span>Total Users</span>
            <div class="d-flex align-items-end mt-2">
              <h4 class="mb-0 me-2">${totalUsers}</h4>
              <small class="text-success">(+29%)</small>
            </div>
            <small>Last week analytics
            </small>
          </div>
          <span class="badge bg-label-primary rounded p-2">
            <i class="bx bx-user bx-sm"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
          <div class="content-left">
            <span>Total Sellers</span>
            <div class="d-flex align-items-end mt-2">
              <h4 class="mb-0 me-2">${totalSellers}</h4>
              <small class="text-success">(+18%)</small>
            </div>
            <small>Last week analytics </small>
          </div>
          <span class="badge bg-label-warning rounded p-2">
            <i class="bx bx-user bx-sm"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
          <div class="content-left">
            <span>Active Users</span>
            <div class="d-flex align-items-end mt-2">
              <h4 class="mb-0 me-2">${activeUsers}</h4>
              <small class="text-danger">(-14%)</small>
            </div>
            <small>Last week analytics</small>
          </div>
          <span class="badge bg-label-success rounded p-2">
            <i class="bx bx-group bx-sm"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6 col-xl-3">
    <div class="card">
      <div class="card-body">
        <div class="d-flex align-items-start justify-content-between">
          <div class="content-left">
            <span>Pending Sellers</span>
            <div class="d-flex align-items-end mt-2">
              <h4 class="mb-0 me-2">${pendingSellers}</h4>
              <small class="text-success">(+42%)</small>
            </div>
            <small>Last week analytics</small>
          </div>
          <span class="badge bg-label-warning rounded p-2">
            <i class="bx bx-user-voice bx-sm"></i>
          </span>
        </div>
      </div>
    </div>
  </div>`
  return analyticComponent;
}

function renderAnalyticsComponents() {
  var $analyticsContainer = $("#Analytics");

  // Clear existing content
  $analyticsContainer.empty();

  // Retrieve users data from local storage
  var usersData = getUsersData();

  // Calculate values
  const totalUsers = usersData.length;
  const totalSellers = usersData.filter(user => user.role === 'Seller').length;
  const activeUsers = usersData.filter(user => user.status === 2).length; // Assuming '2' represents active status
  const pendingSellers = usersData.filter(user => user.role === 'Seller' && user.status === 1).length; // Assuming '1' represents inactive status for sellers

  // Create analytics components based on calculated values
  $analyticsContainer.append(createAnalyticsComponent(usersData, totalUsers, totalSellers, activeUsers, pendingSellers));
}

// Call the function to render analytics components
renderAnalyticsComponents();
