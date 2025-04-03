<script lang="ts">
  import { getStatusColor } from '../utils/statusColors';
  import { useUsers } from '../hooks/use-users.ts';

  const users = useUsers();
</script>

{#if $users.isLoading}
  <div>Loading users...</div>
{:else if $users.error}
  <div>Error: {$users.error}</div>
{:else}
  <div class="grid gap-4" data-testid="users-list">
    {#each $users.data as user (user.id)}
      <div
        class="bg-white rounded-lg shadow p-4 flex justify-between items-center"
        data-testid="user-item"
      >
        <div class="flex flex-row justify-between items-center w-full">
          <h3 class="text-lg font-semibold">{user.name}</h3>
          <span
            class={`px-2 py-1 rounded-lg text-sm font-medium ${getStatusColor(
              user.status,
            )}`}
          >
            {user.status}
          </span>
        </div>
      </div>
    {/each}
  </div>
{/if}
