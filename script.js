let shareCount = 0;

function showOverlay(tier) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("price").innerText = tier;
}

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

function startSharing() {
    let urls = [
        "https://wa.me/?text=🔥 Free internet is here. Own Your VPN! No more broken files! Get custom VPNs now: https://caredesk.site",
        "https://wa.me/?text=🚀 Free internet is here. Tired of unreliable VPNs? Learn how to create your own! Get premium files now: https://caredesk.site",
        "https://wa.me/?text=🔥 Free internet is here. Did you know you can resell vpn files😲 and make profit out of it🫰,its as easy as going to hell🫂: https://caredesk.site"
    ];

    if (shareCount < 2) {
        window.open(urls[shareCount % 2], "_blank");
        shareCount++;
        updateProgress();
    }
}

function updateProgress() {
    let progress = (shareCount / 2) * 100;
    document.getElementById("progress").style.width = progress + "%";
    document.getElementById("share-status").innerText = `Share progress: ${progress}%`;

    if (shareCount >= 2) {
        alert("✅ You've unlocked 25% free access worth of discount! Contact Admin for verification. Claim you files/PDF guide immediately.");
    }
}

function scrollToTiers() {
    const tiersSection = document.getElementById('tiers-section');
    tiersSection.scrollIntoView({ behavior: 'smooth' });
}
