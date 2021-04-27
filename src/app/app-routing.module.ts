import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PodcastProfileComponent } from './pages/podcast-profile/podcast-profile.component';
// import { HomeDashboardModule } from 'src/app/pages/home-dashboard/home-dashboard.module';
import { AuthComponent } from './components/auth/auth.component';
import { HiveTokenComponent } from './pages/hive-token/hive-token.component';
import { HiveTokenRegisterComponent } from './pages/hive-token-register/hive-token-register.component';
import { PostComponent } from './pages/post/post.component';
import { SearchComponent } from './pages/search/search.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { EmbedComponent } from './pages/embed/embed.component';
import { EpisodeDetailsComponent } from './pages/episode-details/episode-details.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';

const routes: Routes = [
  // { path: "", loadChildren: './pages/home-dashboard/home-dashboard.module#HomeDashboardModule' },
  {
    path: "podcast/:podcast_id", component: PodcastProfileComponent,
  },
  { path: "auth", component: AuthComponent },
  { path: "hive-token", component: HiveTokenComponent },
  { path: "hive-token-register", component: HiveTokenRegisterComponent },
  { path: "post", component: PostComponent },
  { path: "search/:query", component: SearchComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "embed/:episode_id", component: EmbedComponent },
  { path: "episode/:episode_id", component: EpisodeDetailsComponent },
  { path: '', component: DiscoverComponent },
  { path: 'favorite', component: FavoriteComponent },
  // { path: '', component: HomeComponent },
  { path: 'episode/:episode_id', component: EpisodeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
