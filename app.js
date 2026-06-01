function getConfessions() {
    return [
        { id: 1, text: "Shocked to that one teacher who always believes we can hear it all", category: "School-life", tags: ["School-life"], timeAgo: "3 hours ago", likes: 0, comments: 0 },
        { id: 2, text: "Sometimes I wish I had the courage to quit my job and travel full time", category: "Work", tags: ["Work"], timeAgo: "5 hours ago", likes: 0, comments: 0 },
        { id: 3, text: "I've school would be better if people didn't judge each other all the time", category: "School-life", tags: ["School-life"], timeAgo: "7 hours ago", likes: 0, comments: 1 },
        { id: 4, text: "I'm scared show how much you mean to me but I really enjoy it", category: "Relationship", tags: ["Relationship"], timeAgo: "1 day ago", likes: 0, comments: 0 },
        { id: 5, text: "I spend more time for the crime, even if you and me.", category: "Social", tags: ["Social"], timeAgo: "1 day ago", likes: 0, comments: 0 },
        { id: 6, text: "I'm the person reading this, you matter! 💜", category: "Social", tags: ["Anonymous"], timeAgo: "2 days ago", likes: 0, comments: 0 }
    ];
}

function createConfessionCard(confession) {
    return `
        <div class="col-md-6 col-lg-4">
            <a href="view-confession.html?id=${confession.id}" class="text-decoration-none">
                <div class="card confession-card border-0 shadow-sm h-100">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <span class="badge bg-primary bg-opacity-10 text-primary small">${confession.category}</span>
                            <button class="btn btn-sm btn-link text-muted p-0"><i class="fas fa-ellipsis-v"></i></button>
                        </div>
                        <p class="text-dark mb-3" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${confession.text}</p>
                        <div class="d-flex justify-content-between align-items-center text-muted small">
                            <div class="d-flex align-items-center gap-2">
                                <div class="avatar-circle" style="width: 24px; height: 24px; font-size: 0.75rem;"><span>👤</span></div>
                                <span>Anonymous</span>
                            </div>
                            <div class="d-flex gap-3">
                                <span><i class="far fa-heart me-1"></i> ${confession.likes}</span>
                                <span><i class="far fa-comment me-1"></i> ${confession.comments}</span>
                            </div>
                        </div>
                        <div class="border-top mt-3 pt-2"><small class="text-muted">${confession.timeAgo}</small></div>
                    </div>
                </div>
            </a>
        </div>
    `;
}
