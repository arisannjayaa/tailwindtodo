function toggleNav() {
	let sidenav = document.querySelector("#sidenav").getElementsByTagName("nav")[0];
	sidenav.classList.toggle("ml-[-350px]");
}

// Data
const data = [
	{
		deadline: 100,
		tugas: "Membuat Tugas PBO",
		deskripsi: "menambahkan pada bagian 4.2 dan 4.3 tambahnakan balbalbalbal....",
		link: "classroom.com",
	},
	{
		deadline: 10,
		tugas: "Membuat Tugas Web",
		deskripsi: "Latihan tailwindcss",
		link: "classroom.com",
	},
	{
		deadline: 3,
		tugas: "Membuat Tugas Aljabar",
		deskripsi: "menambahkan pada bagian 4.2 dan 4.3 tambahnakan balbalbalbal....",
		link: "classroom.com",
	},
	{
		deadline: 3,
		tugas: "Membuat Tugas Aljabar",
		deskripsi: "menambahkan pada bagian 4.2 dan 4.3 tambahnakan balbalbalbal....",
		link: "classroom.com",
	},
	{
		deadline: 3,
		tugas: "Membuat Tugas Aljabar",
		deskripsi: "menambahkan pada bagian 4.2 dan 4.3 tambahnakan balbalbalbal....",
		link: "classroom.com",
	},
	{
		deadline: 3,
		tugas: "Membuat Tugas Aljabar",
		deskripsi: "menambahkan pada bagian 4.2 dan 4.3 tambahnakan balbalbalbal....",
		link: "classroom.com",
	},
];

let cardData = "";
data.forEach(function (e) {
	cardData += `
    <div class="card bg-white p-4 mb-4 rounded-md shadow">
						<div class="card-header flex items-center justify-between">
							<div class="card-header-reminder">
								<i class="bi bi-clock text-red-600 text-[16px]"></i>
								<span class="ml-4 text-[14px] text-[#808080]">Deadline: ${e.deadline} hari</span>
							</div>
							<button class="flex justify-between">
								<i class="bi bi-x text-[#808080] hover:text-red-600 text-[24px]"></i>
							</button>
						</div>
						<div class="card-title mb-6">
							<h4 class="text-[20px] font-semibold text-[#00827A]">${e.tugas}</h4>
						</div>
						<div class="card-desc mb-4">
							<span class="text-[14px] text-[#808080]">Deskripsi</span>
							<p class="text-[14px] text-[#333333]">${e.deskripsi}</p>
						</div>
						<div class="card-link mb-4">
							<span class="text-[14px] text-[#808080]">Link</span>
							<p class="text-[14px] text-[#333333]">${e.link}</p>
						</div>
						<div class="card-button grid grid-cols-2 gap-2">
							<a href="./pages/detail.html" class="bg-[#F0F0F0] text-center text-[#00827A] py-3 px-4 rounded-md">Detail</a>
							<a href="#" class="bg-[#00827A] text-center text-[#FFFFFF] py-3 px-4 rounded-md">Tandai Selesai</a>
						</div>
					</div>
    `;
});

const cardWrapper = document.querySelector(".card-wrapper");

cardWrapper.innerHTML = cardData;
