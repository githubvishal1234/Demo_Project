// Dashboard modules configuration
const dashboardModules = [
    {
        id: 'accounts',
        title: 'Accounts',
        subtitle: 'Management',
        icon: 'fas fa-file-invoice-dollar',
        color: '#ef4444',
        bgColor: 'rgba(239, 68, 68, 0.1)'
    },
    {
        id: 'purchases',
        title: 'Purchases',
        subtitle: 'Management',
        icon: 'fas fa-shopping-cart',
        color: '#10b981',
        bgColor: 'rgba(16, 185, 129, 0.1)'
    },
    {
        id: 'crm',
        title: 'CRM',
        subtitle: 'Customer relationship management',
        icon: 'fas fa-users',
        color: '#3b82f6',
        bgColor: 'rgba(59, 130, 246, 0.1)'
    },
    {
        id: 'production',
        title: 'Production',
        subtitle: 'Management',
        icon: 'fas fa-industry',
        color: '#f59e0b',
        bgColor: 'rgba(245, 158, 11, 0.1)'
    },
    {
        id: 'qc',
        title: 'QC',
        subtitle: 'Quality Check',
        icon: 'fas fa-check-circle',
        color: '#8b5cf6',
        bgColor: 'rgba(139, 92, 246, 0.1)'
    },
    {
        id: 'inventory',
        title: 'Inventory',
        subtitle: 'Management',
        icon: 'fas fa-boxes',
        color: '#f97316',
        bgColor: 'rgba(249, 115, 22, 0.1)'
    },
    {
        id: 'sales',
        title: 'Sales',
        subtitle: 'Management',
        icon: 'fas fa-chart-line',
        color: '#06b6d4',
        bgColor: 'rgba(6, 182, 212, 0.1)'
    },
    {
        id: 'hrd',
        title: 'HRD',
        subtitle: 'Human Resource Development',
        icon: 'fas fa-user-tie',
        color: '#ec4899',
        bgColor: 'rgba(236, 72, 153, 0.1)'
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        subtitle: 'Management',
        icon: 'fas fa-tools',
        color: '#3b82f6',
        bgColor: 'rgba(59, 130, 246, 0.1)'
    },
    {
        id: 'analysis',
        title: 'Analysis',
        subtitle: 'Reports',
        icon: 'fas fa-chart-pie',
        color: '#84cc16',
        bgColor: 'rgba(132, 204, 22, 0.1)'
    },
    {
        id: 'admin',
        title: 'Admin',
        subtitle: 'Administration',
        icon: 'fas fa-shield-alt',
        color: '#ef4444',
        bgColor: 'rgba(239, 68, 68, 0.1)'
    }
];

// Initialize dashboard
function initDashboard() {
    const dashboardGrid = document.getElementById('dashboardGrid');
    
    dashboardModules.forEach((module, index) => {
        const card = createDashboardCard(module, index);
        dashboardGrid.appendChild(card);
    });
}

// Create dashboard card element
function createDashboardCard(module, index) {
    const card = document.createElement('div');
    card.className = 'dashboard-card';
    card.style.setProperty('--card-color', module.color);
    card.style.setProperty('--card-bg', module.bgColor);
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="card-header">
            <div>
                <h3 class="card-title">${module.title}</h3>
                <p class="card-subtitle">${module.subtitle}</p>
            </div>
        </div>
        <div class="card-icon">
            <i class="${module.icon}"></i>
        </div>
        <div class="card-arrow">
            <i class="fas fa-arrow-right"></i>
        </div>
    `;
    
    // Add click event
    card.addEventListener('click', (e) => {
        handleCardClick(module, e);
    });
    
    return card;
}

// Handle card click
function handleCardClick(module, event) {
    // Add ripple effect
    const ripple = document.createElement('div');
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(99, 102, 241, 0.3);
        width: 100px;
        height: 100px;
        left: ${x}px;
        top: ${y}px;
        margin-top: -50px;
        margin-left: -50px;
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    event.currentTarget.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
    
    // Navigate to module (you can implement actual navigation here)
    console.log(`Navigating to ${module.title} module`);
    // window.location.href = `#/${module.id}`;
}

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    }
});

// Update punch time (real-time clock)
function updatePunchTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    
    const punchTimeElement = document.querySelector('.punch-time');
    if (punchTimeElement) {
        punchTimeElement.textContent = timeString;
    }
}

// Update time every minute
setInterval(updatePunchTime, 60000);

// Handle punch out button
const punchOutBtn = document.querySelector('.btn-punch-out');
if (punchOutBtn) {
    punchOutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show confirmation
        if (confirm('Are you sure you want to punch out?')) {
            // Handle punch out logic here
            alert('Punched out successfully!');
            punchOutBtn.textContent = 'Punched Out';
            punchOutBtn.style.background = '#64748b';
            punchOutBtn.disabled = true;
        }
    });
}

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Initialize dashboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    updatePunchTime();
    
    // Add loading animation completion
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    }, 250);
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Toggle sidebar with Ctrl/Cmd + B
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        sidebar.classList.toggle('open');
    }
    
    // Close sidebar with Escape
    if (e.key === 'Escape' && window.innerWidth <= 768) {
        sidebar.classList.remove('open');
    }
});

// Add notification click handler
const notificationBtn = document.querySelector('.notification-btn');
if (notificationBtn) {
    notificationBtn.addEventListener('click', () => {
        // Show notifications (you can implement a notification panel here)
        console.log('Notifications clicked');
    });
}

// Add profile click handler
const userProfile = document.querySelector('.user-profile-header');
if (userProfile) {
    userProfile.addEventListener('click', () => {
        // Show user menu (you can implement a dropdown menu here)
        console.log('Profile clicked');
    });
}

