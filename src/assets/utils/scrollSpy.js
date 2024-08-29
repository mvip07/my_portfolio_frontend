export default function ScrollSpy(e) {
    const sections = document.querySelectorAll(".piece");
    const changeColorItems = document.querySelectorAll(".changeColorItem");

    if (!sections.length || !changeColorItems.length) return;

    const sectionOffsets = Array.from(sections).map(section => section.offsetTop);
    const scrollPos = e?.target?.scrollTop || 0;

    sections.forEach((section, index) => {
        const isInSection = scrollPos >= sectionOffsets[index] && scrollPos < sectionOffsets[index] + section.clientHeight;

        changeColorItems[index]?.classList.toggle("active", isInSection);
    });

    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('visible');
    //         }
    //     });
    // });

    // document.querySelectorAll('.fade-in-out, .slide-in-out, .zoom-in-out, .wipe, .split-text, .flip')
    //     .forEach(element => observer.observe(element));
}