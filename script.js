<script>
    function formatToLocalTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
});
}

    document.querySelectorAll('.local-time').forEach(el => {
    const iso = el.dataset.time;
    el.textContent = formatToLocalTime(iso);
});
</script>