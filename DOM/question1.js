const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

// Add a new product
addBtn.addEventListener("click", () => {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name!");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span class="product-name"></span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    li.querySelector(".product-name").textContent = productName;
    productList.appendChild(li);

    productInput.value = "";
    productInput.focus();
});

// Event delegation for Edit and Delete
productList.addEventListener("click", (event) => {
    const li = event.target.closest("li");

    if (!li || !productList.contains(li)) return;

    // Delete product
    if (event.target.classList.contains("delete-btn")) {
        li.remove();
    }

    // Edit product
    if (event.target.classList.contains("edit-btn")) {
        startEditing(li);
    }

    // Save inline editing
    if (event.target.classList.contains("save-btn")) {
        saveEditing(li);
    }
});

// Enable inline editing
function startEditing(li) {
    if (li.querySelector("input")) return;

    const nameSpan = li.querySelector(".product-name");
    const oldName = nameSpan.textContent;

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.className = "edit-input";
    editInput.value = oldName;

    nameSpan.replaceWith(editInput);

    const editBtn = li.querySelector(".edit-btn");
    editBtn.textContent = "Save";
    editBtn.classList.remove("edit-btn");
    editBtn.classList.add("save-btn");

    editInput.focus();
    editInput.select();
}

// Save edited product
function saveEditing(li) {
    const editInput = li.querySelector(".edit-input");

    if (!editInput) return;

    const newName = editInput.value.trim();

    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = newName || "Unnamed Product";

    editInput.replaceWith(nameSpan);

    const saveBtn = li.querySelector(".save-btn");
    saveBtn.textContent = "Edit";
    saveBtn.classList.remove("save-btn");
    saveBtn.classList.add("edit-btn");
}

// Auto-save when clicking outside the edited item
document.addEventListener("click", (event) => {
    document.querySelectorAll("#productList li").forEach((li) => {
        if (
            li.querySelector(".edit-input") &&
            !li.contains(event.target)
        ) {
            saveEditing(li);
        }
    });
});

// Add product when pressing Enter
productInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addBtn.click();
    }
});
