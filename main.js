// Tabs Navigation
function showTab(tab) {
  // Ẩn tất cả các tab nội dung
  document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');
}

// Đặt mặc định là tab Quản lý tuyển sinh
document.addEventListener("DOMContentLoaded", function() {
  // Mặc định chọn tab đầu tiên
  showTab('admission');
});








// 🏫 Quản lý tuyển sinh

function showTab(tab) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');
}

function calculateResult() {
  const score1 = parseFloat(document.getElementById('score1').value);
  const score2 = parseFloat(document.getElementById('score2').value);
  const score3 = parseFloat(document.getElementById('score3').value);
  const area = parseFloat(document.getElementById('area').value);
  const priority = parseFloat(document.getElementById('priority').value);
  const standard = parseFloat(document.getElementById('standard').value);

  if (isNaN(score1) || isNaN(score2) || isNaN(score3) || isNaN(standard)) {
    document.getElementById('result').innerText = 'Vui lòng nhập đầy đủ điểm các môn và điểm chuẩn';
    return;
  }

  if (score1 === 0 || score2 === 0 || score3 === 0) {
    document.getElementById('result').innerText = 'Rớt ngay lập tức do có môn điểm 0';
    return;
  }

  const totalScore = score1 + score2 + score3 + area + priority;

  if (totalScore >= standard) {
    document.getElementById('result').innerText = `Đậu với tổng điểm: ${totalScore}`;
  } else {
    document.getElementById('result').innerText = `Rớt với tổng điểm: ${totalScore}`;
  }
}


// Tính tiền điện
function showTab(tab) {
  document.querySelectorAll('.tab-content').forEach(div => div.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');
}

function calculateElectricity() {
  const name = document.getElementById('name').value.trim();
  const kw = parseFloat(document.getElementById('kw').value);
  const resultDiv = document.getElementById('electricity-result');

  if (!name) {
    resultDiv.innerText = 'Vui lòng nhập họ tên.';
    return;
  }

  if (isNaN(kw) || kw <= 0) {
    resultDiv.innerText = 'Vui lòng nhập số kWh hợp lệ.';
    return;
  }

  let total = 0;

  if (kw <= 50) {
    total = kw * 1500;
  } else if (kw <= 100) {
    total = 50 * 1500 + (kw - 50) * 1800;
  } else if (kw <= 200) {
    total = 50 * 1500 + 50 * 1800 + (kw - 100) * 2000;
  } else if (kw <= 350) {
    total = 50 * 1500 + 50 * 1800 + 100 * 2000 + (kw - 200) * 2500;
  } else {
    total = 50 * 1500 + 50 * 1800 + 100 * 2000 + 150 * 2500 + (kw - 350) * 3000;
  }

  resultDiv.innerText = `Họ tên: ${name}\nSố kWh: ${kw}\nTổng tiền: ${total.toLocaleString()} đ`;
}


// Thuế Thu Nhập Cá Nhân
function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    const taxMethod = document.getElementById("taxMethod").value;
    const resultDiv = document.getElementById("tax-result");

    if (isNaN(income) || income <= 0) {
        resultDiv.innerText = "Vui lòng nhập tổng thu nhập hợp lệ.";
        return;
    }

    let tax = 0;

    if (taxMethod === "fixed") {
        // Tính thuế theo phần trăm cố định
        if (income <= 60e6) {
            tax = income * 0.05;
        } else if (income <= 120e6) {
            tax = income * 0.1;
        } else if (income <= 216e6) {
            tax = income * 0.15;
        } else if (income <= 384e6) {
            tax = income * 0.2;
        } else {
            tax = income * 0.25;
        }
    } else if (taxMethod === "tier") {
        // Tính thuế theo từng bậc
        if (income <= 60e6) {
            tax = income * 0.05;
        } else if (income <= 120e6) {
            tax = 60e6 * 0.05 + (income - 60e6) * 0.1;
        } else if (income <= 216e6) {
            tax = 60e6 * 0.05 + 60e6 * 0.1 + (income - 120e6) * 0.15;
        } else if (income <= 384e6) {
            tax = 60e6 * 0.05 + 60e6 * 0.1 + 96e6 * 0.15 + (income - 216e6) * 0.2;
        } else {
            tax = 60e6 * 0.05 + 60e6 * 0.1 + 96e6 * 0.15 + 168e6 * 0.2 + (income - 384e6) * 0.25;
        }
    }

    // Định dạng kết quả với NumberFormat
    const formattedTax = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
    }).format(tax);

    resultDiv.innerText = `Thuế thu nhập phải nộp: ${formattedTax}`;
}


// Tính tiền cáp Function
// Hàm bật/tắt ô nhập số kết nối dựa trên loại khách hàng
function toggleConnectionInput() {
    const customerType = document.getElementById("customerType").value;
    const connectionSection = document.getElementById("connectionSection");
    
    if (customerType === "business") {
        connectionSection.classList.remove("hidden");
    } else {
        connectionSection.classList.add("hidden");
    }
}

// Hàm tính tiền cáp
function calculateCableFee() {
    const customerType = document.getElementById("customerType").value;
    const customerCode = document.getElementById("customerCode").value.trim();
    const premiumChannels = parseInt(document.getElementById("premiumChannels").value);
    const connections = parseInt(document.getElementById("connections").value || 0);
    const resultDiv = document.getElementById("cable-result");

    if (!customerCode) {
        resultDiv.innerText = "Vui lòng nhập mã khách hàng.";
        return;
    }

    if (isNaN(premiumChannels) || premiumChannels < 0) {
        resultDiv.innerText = "Vui lòng nhập số kênh cao cấp hợp lệ.";
        return;
    }

    let total = 0;

    if (customerType === "residential") {
        // Nhà dân
        total = 4.5 + 20.5 + premiumChannels * 7.5;
    } else if (customerType === "business") {
        // Doanh nghiệp
        if (isNaN(connections) || connections < 0) {
            resultDiv.innerText = "Vui lòng nhập số kết nối hợp lệ.";
            return;
        }

        // Phí cố định cho 10 kết nối đầu
        if (connections <= 10) {
            total = 15 + 75 + premiumChannels * 50;
        } else {
            total = 15 + 75 + (connections - 10) * 5 + premiumChannels * 50;
        }
    }

    // Định dạng kết quả tiền USD
    const formattedTotal = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(total);

    resultDiv.innerText = `Mã khách hàng: ${customerCode}\nTổng tiền cáp: ${formattedTotal}`;
}
