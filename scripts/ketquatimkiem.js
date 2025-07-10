document.addEventListener('DOMContentLoaded', function() {
            const searchTerm = localStorage.getItem('searchTerm');
            document.getElementById('searchTermDisplay').textContent = searchTerm;

            // Dữ liệu mẫu với URL
            const sampleData = [
                {
                    title: "RAM",
                    description: "Bộ nhớ RAM máy tính với nhiều dung lượng và tốc độ khác nhau",
                    url: "ram.html"
                },
                {
                    title: "Mainboard",
                    description: "Bo mạch chủ máy tính từ các thương hiệu uy tín",
                    url: "mainboard.html"
                },
                {
                    title: "CPU",
                    description: "Bộ vi xử lý Intel và AMD cho hiệu năng mạnh mẽ",
                    url: "cpu.html"
                },
                {
                    title: "VGA",
                    description: "Card màn hình đồ họa chất lượng cao cho gaming và đồ họa",
                    url: "vga.html"
                },
                {
                    title: "SSD-HDD-M.2 NVME",
                    description: "Các loại ổ cứng lưu trữ tốc độ cao, dung lượng lớn",
                    url: "storage.html"
                },
                {
                    title: "PSU-Nguồn Máy tính",
                    description: "Nguồn máy tính công suất cao, ổn định từ các hãng nổi tiếng",
                    url: "psu.html"
                },
                {
                    title: "Case-Thùng vỏ máy tính",
                    description: "Vỏ case máy tính đa dạng kiểu dáng, kích thước",
                    url: "case.html"
                },
                {
                    title: "Màn hình máy tính PC",
                    description: "Màn hình máy tính chất lượng cao, đa dạng kích thước và tần số",
                    url: "monitor.html"
                }
            ];

            const resultsContainer = document.getElementById('resultsContainer');
            
            const results = sampleData.filter(item => 
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (results.length > 0) {
                results.forEach(result => {
                    const resultElement = document.createElement('div');
                    resultElement.className = 'result-item';
                    resultElement.innerHTML = `
                        <a href="${result.url}">
                            <h3>${result.title}</h3>
                            <p>${result.description}</p>
                        </a>
                    `;
                    resultsContainer.appendChild(resultElement);
                });
            } else {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        Không tìm thấy kết quả nào cho "${searchTerm}"
                    </div>
                `;
            }
        });
const responses ={
	"lo":"xin chào,bạn cần giúp đỡ gì không?",
	"hello":"xin chào,bạn cần giúp đỡ gì không?",	
"hi":"xin chào,bạn cần giúp đỡ gì không?",
	"không":"cảm ơn bạn đã phản hồi",
	"ko":"cảm ơn bạn đã phản hồi",
"xin chào":"xin chào,bạn cần giúp đỡ gì không?",
"ram":"RAM (Random Access Memory) là bộ nhớ tạm thời của máy tính, ảnh hưởng trực tiếp đến khả năng đa nhiệm. Chúng tôi cung cấp RAM DDR4, DDR5 với dung lượng từ 8GB đến 64GB, tốc độ bus cao, phù hợp cho gaming và đồ họa. Các thương hiệu uy tín như Corsair, G.Skill, Kingston.",
"mainboard":"Bo mạch chủ (Mainboard) là thành phần trung tâm kết nối các linh kiện máy tính. Chúng tôi cung cấp mainboard từ các thương hiệu uy tín như ASUS, MSI, Gigabyte với đầy đủ socket CPU và tính năng cho gaming, đồ họa, văn phòng.",
"cpu":"CPU (Central Processing Unit) là bộ vi xử lý trung tâm của máy tính, có vai trò xử lý các tác vụ và tính toán. Chúng tôi cung cấp các CPU từ Intel và AMD với nhiều dòng sản phẩm khác nhau phù hợp nhu cầu gaming, đồ họa và văn phòng. Để được tư vấn chi tiết, vui lòng cho biết nhu cầu sử dụng của bạn.",
"vga":"Card màn hình (VGA) xử lý đồ họa cho máy tính. Chúng tôi có các dòng card NVIDIA và AMD với hiệu năng cao, phù hợp cho gaming và đồ họa chuyên nghiệp.",
"ssd-hdd":"Ổ cứng SSD và HDD dùng để lưu trữ dữ liệu. SSD có tốc độ nhanh hơn, phù hợp làm ổ hệ thống. HDD có dung lượng lớn, giá rẻ hơn, thích hợp lưu trữ dữ liệu.",
"ssd":"Ổ cứng SSD có tốc độ đọc/ghi nhanh, giúp máy tính khởi động và load ứng dụng nhanh hơn. Có các loại SATA và NVMe với dung lượng từ 120GB đến 2TB.",
"hdd":"Ổ cứng HDD truyền thống có dung lượng lớn từ 1TB đến 18TB, giá thành hợp lý, phù hợp lưu trữ dữ liệu như phim ảnh, tài liệu.",
"psu":"Nguồn máy tính (PSU) cung cấp điện cho các linh kiện. Chúng tôi có các loại nguồn từ 450W đến 1200W, đạt chuẩn 80 Plus từ các hãng Corsair, EVGA, Seasonic.",
"case":"Vỏ case máy tính đa dạng về kích thước (Mini-ITX đến Full Tower) và kiểu dáng. Hỗ trợ tản nhiệt tốt, dễ dàng lắp đặt linh kiện.",
"màn hình máy tính pc":"Màn hình máy tính với kích thước từ 21.5\" đến 32\", độ phân giải Full HD đến 4K, tần số quét 60Hz đến 240Hz. Phù hợp cho gaming, đồ họa và văn phòng.",
"màn hình pc":"Màn hình máy tính với kích thước từ 21.5\" đến 32\", độ phân giải Full HD đến 4K, tần số quét 60Hz đến 240Hz. Phù hợp cho gaming, đồ họa và văn phòng.",
"default": "Xin lỗi, tôi không hiểu yêu cầu của bạn. Vui lòng liên hệ với đội ngũ hỗ trợ qua email:dungxnguyen6789@gmail.com hoặc số điện thoại: 25062008",
};

document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}

function respondToUser(userInput) {
    const response = responses[userInput] || responses["default"];
    setTimeout(function() {
        appendMessage('bot', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            window.location.href = 'mailto:support@example.com';
        };
        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✖ No';
        buttonNo.onclick = function() {
           appendMessage('bot', "Cảm ơn bạn đã phản hồi!");
        };
const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
}// JavaScript Document
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.tk input[type="text"]');
    const searchButton = document.querySelector('.tk button');

    if (searchInput && searchButton) {
        // Xử lý sự kiện khi nhấn nút tìm kiếm
        searchButton.addEventListener('click', function() {
            performSearch();
        });

        // Xử lý sự kiện khi nhấn Enter trong ô tìm kiếm
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== '') {
            // Lưu từ khóa tìm kiếm vào localStorage để sử dụng ở trang kết quả
            localStorage.setItem('searchTerm', searchTerm);
            // Chuyển hướng đến trang kết quả tìm kiếm
            window.location.href = 'ketquatimkiem.html';
        }
    }
});
// Xử lý dropdown menu sản phẩm
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');
  let timeoutId;

  if (dropdown && dropdownContent) {
    // Xử lý sự kiện hover cho dropdown
    dropdown.addEventListener('mouseenter', function() {
      clearTimeout(timeoutId);
      dropdownContent.style.display = 'block';
      dropdownContent.style.zIndex = '9999'; // Thêm z-index cao hơn
    });

    dropdown.addEventListener('mouseleave', function() {
      timeoutId = setTimeout(function() {
        if (!dropdownContent.matches(':hover')) {
          dropdownContent.style.display = 'none';
        }
      }, 100); // Giảm thời gian delay
    });

    dropdownContent.addEventListener('mouseenter', function() {
      clearTimeout(timeoutId);
      dropdownContent.style.display = 'block';
    });

    dropdownContent.addEventListener('mouseleave', function() {
      dropdownContent.style.display = 'none';
    });

    // Thêm xử lý click cho thiết bị di động
    dropdown.addEventListener('click', function(e) {
      e.preventDefault();
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  }
});
