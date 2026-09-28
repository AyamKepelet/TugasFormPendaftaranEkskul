document.addEventListener("DOMContentLoaded", () => {
    const User_inp1 = document.getElementById("User_inp1")
    const Pilih_Jurusan = document.getElementById("Pilih-Jurusan")
    const Pilih_Ekskul = document.getElementById("Pilih-Ekskul")
    let TableData = document.getElementById("TableData")
    let nomor = 0

    document.getElementById("btn-Result").addEventListener("click", (e) => {
        e.preventDefault()
    try{

        let UsernameInp = User_inp1.value
        let KelasChecked = document.querySelector('input[name="kelas"]:checked')
        let KelasInp = KelasChecked ? KelasChecked.value : ""
        let JurusanInp = Pilih_Jurusan.value
        let EkskulInp = Pilih_Ekskul.value

        if(UsernameInp == "" || KelasInp == "" || JurusanInp == "" || EkskulInp == ""){
            alert("data tidak boleh kosong")
        }else{
        nomor++
        let tr = document.createElement("tr")
        tr.className = "headersTable"
        tr.dataset.id = nomor
        let id =  document.createElement("td")
        id.innerHTML = `<span class="id">${tr.dataset.id}</span>`
        let tdUsername =  document.createElement("td")
        tdUsername.innerHTML = `<span class="dataUser">${UsernameInp}</span>`
        let tdKelas =  document.createElement("td")
        tdKelas.innerHTML = `<span class="dataKls">${KelasInp}</span>`
        let tdJurusan =  document.createElement("td")
        tdJurusan.innerHTML = `<span class="dataJrs">${JurusanInp}</span>`
        let tdEkskul =  document.createElement("td")
        tdEkskul.innerHTML = `<span class="dataEks">${EkskulInp}</span>`
        let tdAksi =  document.createElement("td")
        tdAksi.innerHTML = `<button class="ChangeBtn">Ubah</button> <button class="DelBtn">Delete</button>`
        tr.append(id,tdUsername,tdKelas,tdJurusan,tdEkskul,tdAksi)
        TableData.appendChild(tr)
        User_inp1.value = ""
        Pilih_Jurusan.value = ""
        Pilih_Ekskul.value = ""
        document.querySelectorAll('input[name="kelas"]').forEach(r => r.checked = false)

const modifyBtn = tr.querySelector(".ChangeBtn")
modifyBtn.addEventListener("click", () => {
            const Username = tr.querySelector(".dataUser")
            const Kelas = tr.querySelector(".dataKls")
            const Jurusan = tr.querySelector(".dataJrs")
            const Ekskul = tr.querySelector(".dataEks")

            if(modifyBtn.textContent !== "Accept"){
            Username.innerHTML = `<input class = "modifUser" value="${Username.textContent}">`
            Kelas.innerHTML = `<input class = "modifKls" value="${Kelas.textContent}">`
            Jurusan.innerHTML = `<input class = "modifJrs" value="${Jurusan.textContent}">`
            Ekskul.innerHTML = `<input class = "modifEks" value="${Ekskul.textContent}">`
            modifyBtn.textContent = "Accept"
            return
            }

            const UsernameValue = Username.querySelector(".modifUser")
            const KelasValue = Kelas.querySelector(".modifKls")
            const JurusanValue = Jurusan.querySelector(".modifJrs")
            const EkskulValue = Ekskul.querySelector(".modifEks")

            const UpdateUsername = UsernameValue.value.trim()
            const UpdateKelas = KelasValue.value.trim()
            const UpdateJurusan = JurusanValue.value.trim()
            const UpdateEkskul = EkskulValue.value.trim()

            if(!UpdateUsername || !UpdateKelas || !UpdateJurusan || !UpdateEkskul){
                alert("Masukkan data yang ingin diubah")
                return
            }

            Username.innerHTML = UpdateUsername
            Kelas.innerHTML = UpdateKelas
            Jurusan.innerHTML = UpdateJurusan
            Ekskul.innerHTML = UpdateEkskul
            modifyBtn.textContent = "Ubah"
})

        const deleteBtn = tr.querySelector(".DelBtn")
        deleteBtn.addEventListener("click", () => {
            tr.remove()
    })
        }
    } catch(e){
        console.error(e);
    }
    })
})