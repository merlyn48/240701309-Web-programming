/* =========================================
   HIDDEN GEMS
   A little guide to places worth discovering
========================================= */

const destinations = [{
        id: 1,
        name: "Chettinad",
        state: "Tamil Nadu",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Traditional Indian architecture and detailed craftsmanship",
        summary: "Grand old homes, patterned tiles, and quiet streets full of character.",
        story: "Chettinad is known for its beautiful mansions, colourful courtyards, carved doors, and patterned tiles. Many of these homes reflect the travels and traditions of the Chettiar community. Take your time here. The smallest details often turn out to be the most memorable.",
        fact: "The Chettinad region is also known for its distinctive cuisine and traditional handmade tiles."
    },
    {
        id: 2,
        name: "Pichavaram",
        state: "Tamil Nadu",
        category: "Nature",
        image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "A lush green forest landscape",
        summary: "A maze of mangrove waterways best explored slowly by boat.",
        story: "Pichavaram is home to an extensive mangrove forest near the coast of Tamil Nadu. Narrow waterways wind between the trees, creating a landscape that feels far removed from busy towns. A boat ride is a lovely way to take it all in, especially when the water is calm.",
        fact: "Mangroves provide shelter for wildlife and help protect coastlines from erosion."
    },
    {
        id: 3,
        name: "Tharangambadi",
        state: "Tamil Nadu",
        category: "History",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "A historic coastal setting beside the sea",
        summary: "A seaside town where Tamil heritage meets a little-known Danish past.",
        story: "Tharangambadi, also called Tranquebar, is a small coastal town with a distinctive Danish and Tamil history. Wander past colonial-era buildings, visit Fort Dansborg, and spend a little time by the sea. It is the kind of place that rewards an unhurried afternoon.",
        fact: "Fort Dansborg was built by the Danish East India Company in the early seventeenth century."
    },
    {
        id: 4,
        name: "Kolli Hills",
        state: "Tamil Nadu",
        category: "Nature",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Green mountain slopes rising into the distance",
        summary: "Winding mountain roads, forest views, and a break from busy city life.",
        story: "Kolli Hills is a hill region in the Eastern Ghats, known for winding roads, green slopes, and waterfalls during the right season. The journey is part of the experience, with views opening up as you climb. Check local conditions before setting out, especially during heavy rain.",
        fact: "Kolli Hills forms part of the Eastern Ghats in Tamil Nadu."
    },
    {
        id: 5,
        name: "Athangudi",
        state: "Tamil Nadu",
        category: "Craft",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Traditional interior design and decorative craft details",
        summary: "A small village famous for colourful tiles made by hand.",
        story: "Athangudi is closely associated with the patterned cement tiles made by local craftspeople. Their colours and designs are often inspired by traditional homes in the Chettinad region. Visit a workshop if you can and see how the tiles are shaped, coloured, and polished by hand.",
        fact: "Athangudi tiles are known for their bright patterns and distinctive finish."
    },
    {
        id: 6,
        name: "Majuli",
        state: "Assam",
        category: "Culture",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "A peaceful green countryside landscape",
        summary: "River island life, traditional arts, and a slower way of spending the day.",
        story: "Set in the Brahmaputra River, Majuli is known for its satras, local arts, and Assamese cultural traditions. Visitors can learn about mask-making, see traditional performances when available, or simply explore village life. Ferry services and river conditions can change with the seasons, so check travel details before going.",
        fact: "Majuli is an important centre of the Neo-Vaishnavite cultural tradition in Assam."
    },
    {
        id: 7,
        name: "Ziro Valley",
        state: "Arunachal Pradesh",
        category: "Culture",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "A quiet valley surrounded by green hills",
        summary: "Open fields, forested hills, and a strong connection to local traditions.",
        story: "Ziro Valley is home to the Apatani people and is known for its distinctive landscape and cultural heritage. Walking through the valley gives you a chance to appreciate the scenery as well as the farming practices and architecture of local communities. Check current entry and travel requirements before planning a visit.",
        fact: "The Apatani cultural landscape is recognised for its distinctive traditional land-use practices."
    },
    {
        id: 8,
        name: "Bishnupur",
        state: "West Bengal",
        category: "Architecture",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Historic Indian architecture with intricate details",
        summary: "Terracotta temples covered in details that tell stories of their own.",
        story: "Bishnupur is famous for its terracotta temples, many built under the Malla rulers. Their walls feature detailed scenes from mythology and everyday life, shaped into baked clay. It is a wonderful place to see how architecture can tell stories without using words.",
        fact: "Bishnupur is particularly well known for its distinctive terracotta temple architecture."
    },
    {
        id: 9,
        name: "Patan",
        state: "Gujarat",
        category: "Craft",
        image: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Colourful traditional textile and craft details",
        summary: "A place to discover the patience and skill behind traditional silk weaving.",
        story: "Patan is known for Patola silk textiles made using a demanding double ikat weaving technique. The patterns are planned with great care before the fabric is woven, making each piece a remarkable work of craftsmanship. A visit to a museum or weaving centre can offer a closer look at the process.",
        fact: "Patola weaving involves carefully dyeing both warp and weft threads before they are woven together."
    },
    {
        id: 10,
        name: "Orchha",
        state: "Madhya Pradesh",
        category: "History",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Historic palace architecture in India",
        summary: "Palaces, temples, and old stone buildings beside the Betwa River.",
        story: "Orchha was once the seat of the Bundela rulers, and its palaces and temples still shape the town's skyline. Explore the fort complex, walk along the river, and notice how the buildings sit within the landscape. Early mornings and late afternoons are especially pleasant for a stroll.",
        fact: "Orchha's historic complex includes the Jahangir Mahal, Raj Mahal, and several temples."
    },
    {
        id: 11,
        name: "Gokarna",
        state: "Karnataka",
        category: "Coast",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Waves meeting a sandy shoreline",
        summary: "Quiet beaches, coastal walks, and a town with a life of its own.",
        story: "Gokarna is known for its temples and its coastline, where smaller beaches sit between rocky headlands. Spend the day exploring the town, walking along the shore, or finding a quiet spot to watch the waves. Coastal trail conditions can vary, so take care near steep sections.",
        fact: "Gokarna is both a pilgrimage town and a destination for travellers exploring Karnataka's coast."
    },
    {
        id: 12,
        name: "Chopta",
        state: "Uttarakhand",
        category: "Nature",
        image: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80",
        imageAlt: "Mountain slopes and forest scenery",
        summary: "Mountain air, forest paths, and wide views across the Himalayas.",
        story: "Chopta is a small mountain destination surrounded by forests and open meadows. It is often used as a starting point for the Tungnath and Chandrashila trek. Weather can change quickly in the mountains, so check local advice and carry suitable clothing.",
        fact: "Tungnath, reached by a trek from the Chopta area, is widely recognised as one of the highest Shiva temples in the world."
    }
];


/* =========================================
   PAGE ELEMENTS
========================================= */

const destinationGrid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const stateFilter = document.getElementById("stateFilter");
const categoryFilter = document.getElementById("categoryFilter");

const resultsCount = document.getElementById("resultsCount");
const viewLabel = document.getElementById("viewLabel");
const emptyState = document.getElementById("emptyState");

const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const emptyResetBtn = document.getElementById("emptyResetBtn");

const showFavoritesBtn = document.getElementById("showFavoritesBtn");
const favoriteCount = document.getElementById("favoriteCount");

const storyModal = document.getElementById("storyModal");
const storyModalBody = document.getElementById("storyModalBody");

const featureExploreBtn = document.getElementById("featureExploreBtn");
const featureLink = document.getElementById("featureLink");

const FAVORITES_KEY = "hiddenGemsFavorites";

let savedPlaces = loadSavedPlaces();
let showingFavoritesOnly = false;


/* =========================================
   SAVED PLACES
========================================= */

function loadSavedPlaces() {
    try {
        const stored = JSON.parse(
            localStorage.getItem(FAVORITES_KEY) || "[]"
        );

        if (!Array.isArray(stored)) {
            return [];
        }

        return [...new Set(
            stored
            .map(Number)
            .filter((id) => destinations.some((place) => place.id === id))
        )];
    } catch (error) {
        return [];
    }
}

function saveFavorites() {
    try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(savedPlaces));
    } catch (error) {
        console.warn("Saved places are unavailable in this browser.");
    }
}

function isSaved(id) {
    return savedPlaces.includes(Number(id));
}

function updateFavoriteCount() {
    if (favoriteCount) {
        favoriteCount.textContent = savedPlaces.length;
    }

    if (showFavoritesBtn) {
        showFavoritesBtn.classList.toggle("active", showingFavoritesOnly);

        showFavoritesBtn.setAttribute(
            "aria-pressed",
            String(showingFavoritesOnly)
        );

        showFavoritesBtn.title = showingFavoritesOnly ?
            "Show all destinations" :
            "Show your saved places";

        showFavoritesBtn.innerHTML = `
      <span class="saved-heart" aria-hidden="true">
        ${showingFavoritesOnly ? "♥" : "♡"}
      </span>
      <span>${showingFavoritesOnly ? "Show all places" : "Saved places"}</span>
      <span id="favoriteCount">${savedPlaces.length}</span>
    `;
    }
}

function toggleFavorite(id) {
    const numericId = Number(id);

    if (isSaved(numericId)) {
        savedPlaces = savedPlaces.filter(
            (savedId) => savedId !== numericId
        );
    } else {
        savedPlaces.push(numericId);
    }

    saveFavorites();
    updateFavoriteCount();
    renderDestinations();

    // Refresh the open story so its save button stays in sync.
    if (
        storyModal &&
        storyModal.classList.contains("show")
    ) {
        openDestinationStory(numericId, false);
    }
}


/* =========================================
   SAFE HTML HELPER
========================================= */

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };

        return entities[character];
    });
}


/* =========================================
   FILTER OPTIONS
========================================= */

function populateFilters() {
    if (stateFilter) {
        const previousState = stateFilter.value;

        const states = [...new Set(
            destinations.map((place) => place.state)
        )].sort((a, b) => a.localeCompare(b));

        stateFilter.innerHTML = '<option value="">All states</option>';

        states.forEach((state) => {
            const option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateFilter.appendChild(option);
        });

        if (states.includes(previousState)) {
            stateFilter.value = previousState;
        }
    }

    if (categoryFilter) {
        const previousCategory = categoryFilter.value;

        const categories = [...new Set(
            destinations.map((place) => place.category)
        )].sort((a, b) => a.localeCompare(b));

        categoryFilter.innerHTML =
            '<option value="">All categories</option>';

        categories.forEach((category) => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });

        if (categories.includes(previousCategory)) {
            categoryFilter.value = previousCategory;
        }
    }
}


/* =========================================
   SEARCH AND FILTER LOGIC
========================================= */

function getFilteredDestinations() {
    const searchTerm = searchInput ?
        searchInput.value.trim().toLowerCase() :
        "";

    const selectedState = stateFilter ?
        stateFilter.value :
        "";

    const selectedCategory = categoryFilter ?
        categoryFilter.value :
        "";

    return destinations.filter((place) => {
        const searchableText = [
            place.name,
            place.state,
            place.category,
            place.summary,
            place.story,
            place.fact
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);

        const matchesState = !selectedState || place.state === selectedState;

        const matchesCategory = !selectedCategory || place.category === selectedCategory;

        const matchesSaved = !showingFavoritesOnly || isSaved(place.id);

        return (
            matchesSearch &&
            matchesState &&
            matchesCategory &&
            matchesSaved
        );
    });
}


/* =========================================
   RESULTS LABELS
========================================= */

function updateResultsText(count) {
    if (resultsCount) {
        resultsCount.textContent =
            `${count} ${count === 1 ? "place" : "places"} to explore`;
    }

    if (!viewLabel) return;

    if (showingFavoritesOnly) {
        viewLabel.textContent = "Your saved places";
    } else if (searchInput && searchInput.value.trim()) {
        viewLabel.textContent = "Places matching your search";
    } else if (stateFilter && stateFilter.value) {
        viewLabel.textContent = `Places in ${stateFilter.value}`;
    } else if (categoryFilter && categoryFilter.value) {
        viewLabel.textContent = `${categoryFilter.value} places`;
    } else {
        viewLabel.textContent = "A few places worth knowing";
    }
}


/* =========================================
   RENDER DESTINATION CARDS
========================================= */

function renderDestinations() {
    if (!destinationGrid) return;

    const places = getFilteredDestinations();

    updateResultsText(places.length);
    updateFavoriteCount();

    if (emptyState) {
        emptyState.style.display = places.length ? "none" : "block";
    }

    destinationGrid.style.display = places.length ? "grid" : "none";

    if (!places.length) {
        destinationGrid.innerHTML = "";
        return;
    }

    destinationGrid.innerHTML = places.map((place) => {
        const saved = isSaved(place.id);

        return `
      <article class="destination-item">

        <div class="destination-image-wrap">
          <img
            class="destination-image"
            src="${escapeHTML(place.image)}"
            alt="${escapeHTML(place.imageAlt)}"
            loading="lazy"
          >

          <span class="destination-category">
            ${escapeHTML(place.category)}
          </span>

          <button
            class="save-button ${saved ? "is-saved" : ""}"
            type="button"
            data-favorite-id="${place.id}"
            aria-label="${saved ? "Remove" : "Save"} ${escapeHTML(place.name)} ${saved ? "from" : "to"} saved places"
            aria-pressed="${saved}"
            title="${saved ? "Remove from saved places" : "Save this place"}"
          >
            ${saved ? "♥" : "♡"}
          </button>
        </div>

        <div class="destination-details">
          <p class="destination-location">
            ${escapeHTML(place.state)}
          </p>

          <h3 class="destination-name">
            ${escapeHTML(place.name)}
          </h3>

          <p class="destination-summary">
            ${escapeHTML(place.summary)}
          </p>

          <button
            class="destination-story-link"
            type="button"
            data-story-id="${place.id}"
          >
            Get to know this place
            <span aria-hidden="true">↗</span>
          </button>
        </div>

      </article>
    `;
    }).join("");
}


/* =========================================
   DESTINATION STORY MODAL
========================================= */

function openDestinationStory(id, showModal = true) {
    const place = destinations.find(
        (destination) => destination.id === Number(id)
    );

    if (!place || !storyModal || !storyModalBody) return;

    const saved = isSaved(place.id);

    storyModalBody.innerHTML = `
    <article class="story-detail">

      <img
        class="story-detail-image"
        src="${escapeHTML(place.image)}"
        alt="${escapeHTML(place.imageAlt)}"
      >

      <p class="story-detail-location">
        ${escapeHTML(place.state)} · ${escapeHTML(place.category)}
      </p>

      <h2 class="story-detail-title">
        ${escapeHTML(place.name)}
      </h2>

      <p class="story-detail-intro">
        ${escapeHTML(place.summary)}
      </p>

      <p class="story-detail-copy">
        ${escapeHTML(place.story)}
      </p>

      <div class="story-detail-fact">
        <p class="story-detail-fact-label">A little detail to remember</p>
        <p>${escapeHTML(place.fact)}</p>
      </div>

      <button
        class="btn btn-outline-dark story-save-button"
        type="button"
        data-favorite-id="${place.id}"
        aria-pressed="${saved}"
      >
        ${saved ? "♥ Saved to your places" : "♡ Save this place"}
      </button>

    </article>
  `;

    if (showModal && window.bootstrap && window.bootstrap.Modal) {
        window.bootstrap.Modal
            .getOrCreateInstance(storyModal)
            .show();
    }
}


/* =========================================
   RESET FILTERS
========================================= */

function resetFilters() {
    if (searchInput) searchInput.value = "";
    if (stateFilter) stateFilter.value = "";
    if (categoryFilter) categoryFilter.value = "";

    showingFavoritesOnly = false;

    updateFavoriteCount();
    renderDestinations();
}

if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener("click", resetFilters);
}

if (emptyResetBtn) {
    emptyResetBtn.addEventListener("click", resetFilters);
}


/* =========================================
   SEARCH AND FILTER EVENTS
========================================= */

if (searchInput) {
    searchInput.addEventListener("input", renderDestinations);
}

if (stateFilter) {
    stateFilter.addEventListener("change", renderDestinations);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", renderDestinations);
}


/* =========================================
   DESTINATION CARD EVENTS
========================================= */

if (destinationGrid) {
    destinationGrid.addEventListener("click", (event) => {
        const favoriteButton = event.target.closest("[data-favorite-id]");

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.favoriteId);
            return;
        }

        const storyButton = event.target.closest("[data-story-id]");

        if (storyButton) {
            openDestinationStory(storyButton.dataset.storyId);
        }
    });
}


/* =========================================
   SAVE FROM INSIDE THE STORY MODAL
========================================= */

if (storyModalBody) {
    storyModalBody.addEventListener("click", (event) => {
        const favoriteButton = event.target.closest("[data-favorite-id]");

        if (favoriteButton) {
            toggleFavorite(favoriteButton.dataset.favoriteId);
        }
    });
}


/* =========================================
   SAVED PLACES NAVIGATION BUTTON
========================================= */

if (showFavoritesBtn) {
    showFavoritesBtn.addEventListener("click", () => {
        showingFavoritesOnly = !showingFavoritesOnly;

        updateFavoriteCount();
        renderDestinations();

        const exploreSection = document.getElementById("exploreSection");

        if (exploreSection) {
            exploreSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}


/* =========================================
   OPTIONAL FEATURED DESTINATION BUTTONS
========================================= */

if (featureExploreBtn) {
    featureExploreBtn.addEventListener("click", () => {
        openDestinationStory(1);
    });
}

if (featureLink) {
    featureLink.addEventListener("click", (event) => {
        event.preventDefault();
        openDestinationStory(1);
    });
}


/* =========================================
   COLLECTION LINKS
   Examples:
   index.html?state=Tamil%20Nadu
   index.html?category=Nature
========================================= */

function applyURLFilters() {
    const params = new URLSearchParams(window.location.search);

    const requestedState = params.get("state");
    const requestedCategory = params.get("category");

    if (requestedState && stateFilter) {
        const matchingState = [...stateFilter.options].some(
            (option) => option.value === requestedState
        );

        if (matchingState) {
            stateFilter.value = requestedState;
        }
    }

    if (requestedCategory && categoryFilter) {
        const matchingCategory = [...categoryFilter.options].some(
            (option) => option.value === requestedCategory
        );

        if (matchingCategory) {
            categoryFilter.value = requestedCategory;
        }
    }
}


/* =========================================
   START THE PAGE
========================================= */

populateFilters();
applyURLFilters();
updateFavoriteCount();
renderDestinations();