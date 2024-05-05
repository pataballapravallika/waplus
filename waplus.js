<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WA+CRM Extension</title>
    <style>
        /* CSS styles */
        .filter-section {
            margin-bottom: 20px;
        }
        .crm-table {
            /* Style your CRM table here */
        }
    </style>
</head>
<body>
    <div class="filter-section">
        <label for="filter">Filter:</label>
        <select id="filter">
            <option value="all">All</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <!-- Add more options as needed -->
        </select>
    </div>
    <div class="crm-table">
        <!-- CRM data will be displayed here -->
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        // JavaScript code
        $(document).ready(function() {
            // Sample CRM data (replace with your actual data)
            const crmData = [
                { name: 'John Doe', status: 'new' },
                { name: 'Jane Smith', status: 'contacted' },
                // Add more CRM data as needed
            ];

            // Function to render CRM table based on filter
            function renderCRMTable(filter) {
                const filteredData = filter === 'all' ? crmData : crmData.filter(item => item.status === filter);
                $('.crm-table').empty();
                filteredData.forEach(item => {
                    $('.crm-table').append(`<div>${item.name} - ${item.status}</div>`);
                });
            }

            // Initial render
            renderCRMTable('all');

            // Event listener for filter change
            $('#filter').change(function() {
                const selectedFilter = $(this).val();
                renderCRMTable(selectedFilter);
            });
        });
    </script>
</body>
</html>

