(() => {
  const ext = (globalThis as any).browser ?? (globalThis as any).chrome;
  const storageArea = ext?.storage?.sync ?? ext?.storage?.local;

  function getCourses(): Promise<{ id: string; name: string }[]> {
    if (!storageArea) return Promise.resolve([]);
    return new Promise((resolve) => {
      storageArea.get({ courseList: [] }, (items: { courseList: { id: string; name: string }[] }) =>
        resolve(items.courseList || [])
      );
    });
  }

  function render(courses: { id: string; name: string }[]) {
    const grid = document.getElementById("grid");
    if (!grid) return;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }

    for (const course of courses) {
      const card = document.createElement("div");
      card.className = "dash__card";

      const title = document.createElement("div");
      title.className = "dash__course";
      title.textContent = course.name;

      const link = document.createElement("a");
      link.className = "dash__link dash__link--secondary";
      link.href = `https://d2l.msu.edu/d2l/lms/dropbox/user/folders_list.d2l?ou=${course.id}`;
      link.textContent = "Open Assignments";

      card.appendChild(title);
      card.appendChild(link);
      grid.appendChild(card);
    }
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const courses = await getCourses();
    render(courses);
  });
})();
